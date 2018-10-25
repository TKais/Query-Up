import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, Platform } from 'react-native';
import { StyledView, StyledButton, ButtonText, StyledHeader, SpaceView } from '../assets/styles/common';
import { StyledNumberText } from '../assets/styles/quiz-card-styles';
import { colorPalette } from '../utils/styles';

class QuizCard extends React.Component {
  state = {
    answerIsVisible: false
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
  }

  showQuestionAndAnswer = () => {
    this.setState({ answerIsVisible: !this.state.answerIsVisible });

    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  renderButtonContainer = () => {
    return (
      <View>
        <StyledButton onPress={this.showQuestionAndAnswer} activeOpacity={0.8} theme={{ buttonColor: colorPalette.peach }}>
          <ButtonText>{this.state.answerIsVisible ? 'Question' : 'Answer'}</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.props.onCorrectAnswer} activeOpacity={0.8} theme={{ buttonColor: '#66a266' }}>
          <ButtonText>Correct</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.props.onIncorrectAnswer} activeOpacity={0.8} theme={{ buttonColor: '#FF0000' }}>
          <ButtonText>Incorrect</ButtonText>
        </StyledButton>
      </View>
    );
  }

  renderStyles = (side) => {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    if(Platform.OS === 'ios') {
      return this.renderIOSStyles(side, frontAnimatedStyle, backAnimatedStyle);
    } else {
      return this.renderAndroidStyles(side, frontAnimatedStyle, backAnimatedStyle);
    }
  }

  renderIOSStyles = (side, frontAnimatedStyle, backAnimatedStyle) => {
    if(side === 'front') {
      return [styles.flipCard, frontAnimatedStyle];
    } else {
      return [backAnimatedStyle, styles.flipCard, styles.flipCardBack];
    }
  }

  renderAndroidStyles = (side, frontAnimatedStyle, backAnimatedStyle) => {
    const showOrHideBack = this.state.answerIsVisible ? styles.androidShow : styles.androidHide;
    const showOrHideFront = this.state.answerIsVisible ? styles.androidHide : styles.androidShow;


    if(side === 'front') {
      return [styles.flipCard, frontAnimatedStyle, showOrHideFront];
    } else {
      return [backAnimatedStyle, styles.flipCard, styles.flipCardBack, showOrHideBack];
    }
  }

  render() {
    return (
      <StyledView>
        <SpaceView>
          <StyledNumberText>{ `${this.props.cardIndex}/${this.props.cards.length}` }</StyledNumberText>
          <Animated.View style={this.renderStyles('front')}>
          <StyledHeader>{this.props.question}</StyledHeader>
          { this.renderButtonContainer() }
          </Animated.View>
          <Animated.View style={this.renderStyles('back')}>
            <StyledHeader>{this.props.answer}</StyledHeader>
            { this.renderButtonContainer() }
          </Animated.View>
        </SpaceView>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  androidShow: {
    opacity: 1,
  },
  androidHide: {
    opacity: 0,
  },
  flipCard: {
    width: Dimensions.get('window').width,
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    top: 0,
    position: 'absolute',
  },
});

export default QuizCard;