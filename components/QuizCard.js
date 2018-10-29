import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, Platform } from 'react-native';
import { StyledView, StyledButton, ButtonText, StyledHeader, SpaceView, StyledSubHeader } from '../assets/styles/common';
import { StyledNumberText, StyledScoreButtons, StyledScoreButtonWrapper } from '../assets/styles/quiz-card-styles';
import { colorPalette, additionalColors } from '../utils/styles';
import { Ionicons } from '@expo/vector-icons';

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
      <StyledScoreButtonWrapper>
        <StyledScoreButtons onPress={this.props.onHandleAnswer.bind(this, true)} activeOpacity={0.8}>
          <Ionicons name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} size={Platform.OS === 'ios' ? 125 : 90} color={additionalColors.correctAnswer} />
          <StyledSubHeader>Correct</StyledSubHeader>
        </StyledScoreButtons>
        <StyledScoreButtons onPress={this.props.onHandleAnswer.bind(this, false)} activeOpacity={0.8}>
          <Ionicons name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} size={Platform.OS === 'ios' ? 125 : 90} color={additionalColors.incorrectAnswer} />
          <StyledSubHeader>Incorrect</StyledSubHeader>
        </StyledScoreButtons>
      </StyledScoreButtonWrapper>
    );
  }

  renderAnswerButton = () => {
    return (
      <StyledButton onPress={this.showQuestionAndAnswer} activeOpacity={0.8} theme={{ buttonColor: colorPalette.peach, marginTop: 50 }}>
        <ButtonText>{this.state.answerIsVisible ? 'Question' : 'Answer'}</ButtonText>
      </StyledButton>
    );
  }

  renderStyles = (side) => {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
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
            <StyledHeader theme={{headerColor: additionalColors.headers}}>{this.props.question}</StyledHeader>
            { this.renderAnswerButton() }
          </Animated.View>
          <Animated.View style={this.renderStyles('back')}>
            <StyledHeader theme={{headerColor: additionalColors.headers}}>{this.props.answer}</StyledHeader>
            { this.renderAnswerButton() }
          </Animated.View>
          { this.renderButtonContainer() }
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