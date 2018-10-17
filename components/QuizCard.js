import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { StyledView, StyledButton, ButtonText } from '../assets/styles/common';
import { StyledNumberText } from '../assets/styles/quiz-card-styles';

class QuizCard extends React.Component {
  state = {
    answerIsVisible: false
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
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
        <StyledButton onPress={this.showQuestionAndAnswer}>
          <ButtonText>{this.state.answerIsVisible ? 'Question' : 'Answer'}</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.props.onCorrectAnswer}>
          <ButtonText>Correct</ButtonText>
        </StyledButton>
        <StyledButton onPress={this.props.onIncorrectAnswer}>
          <ButtonText>Incorrect</ButtonText>
        </StyledButton>
      </View>
    );
  }

  render() {
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
    return (
      <StyledView>
        <StyledNumberText>{ `${this.props.cardIndex}/${this.props.cards.length}` }</StyledNumberText>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
        <Text>{this.props.question}</Text>
        { this.renderButtonContainer() }
        </Animated.View>
        <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
          <Text>{this.props.answer}</Text>
          { this.renderButtonContainer() }
        </Animated.View>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
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