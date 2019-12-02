import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  padding: 30px 30px;
`;

export const Box = styled.View`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
`;

export const QuestionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const QuestionTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #666;
`;

export const QuestionDate = styled.Text`
  color: #999;
`;

export const Question = styled.Text`
  color: #666;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const AnswerHeader = styled.View`
  margin-bottom: 15px;
`;

export const AnswerText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #666;
`;

export const Answer = styled.Text`
  color: #666;
  font-size: 16px;
  line-height: 30px;
`;
