import { useState } from 'react';
import styled from 'styled-components';
import { BsTrash3, BsCheckCircleFill } from 'react-icons/bs';

const Button = styled.button`
  &:hover {
    color: var(--main-color);
  }
`;

const Review = styled.textarea`
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  resize: none;
  margin-bottom: 1rem;

  @media (max-width: 1023px) {
    width: 300px;
    height: 210px;
  }

  @media (min-width: 1024px) {
    width: 470px;
    height: 270px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  margin: 0 auto;

  @media (max-width: 1023px) {
    width: 280px;
    font-size: 20px;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    width: 450px;
    font-size: 25px;
  }
`;

const UserReview = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Review value={inputValue} onChange={handleInputChange}></Review>
      <ButtonBox>
        <Button style={{ margin: '0 1rem' }}>
          <BsTrash3 />
        </Button>
        <Button>
          <BsCheckCircleFill />
        </Button>
      </ButtonBox>
    </>
  );
};
export default UserReview;