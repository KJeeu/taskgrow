import styled from 'styled-components';
import Calendar from '../../components/Calendar/Calendar';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TaskPage = () => {
  return (
    <Main>
      <Calendar />
    </Main>
  );
};

export default TaskPage;