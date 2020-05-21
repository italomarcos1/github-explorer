import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/26335864?s=460&u=27c7f289bca68217510a5fbb0351cd64c74ec7cb&v=4"
            alt="Italo Marcos"
          />
          <div>
            <strong>italomarcos1/gobarberweb</strong>
            <p>
              Uma aplicação front-end desenvolvida com ReactJS, durante o do
              bootcamp GoStack, da Rocketseat.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/26335864?s=460&u=27c7f289bca68217510a5fbb0351cd64c74ec7cb&v=4"
            alt="Italo Marcos"
          />
          <div>
            <strong>italomarcos1/gobarberweb</strong>
            <p>
              Uma aplicação front-end desenvolvida com ReactJS, durante o do
              bootcamp GoStack, da Rocketseat.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/26335864?s=460&u=27c7f289bca68217510a5fbb0351cd64c74ec7cb&v=4"
            alt="Italo Marcos"
          />
          <div>
            <strong>italomarcos1/gobarberweb</strong>
            <p>
              Uma aplicação front-end desenvolvida com ReactJS, durante o do
              bootcamp GoStack, da Rocketseat.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
