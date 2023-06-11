import { FaTwitter, FaSoundcloud, FaGithub } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import { SiWantedly } from 'react-icons/si';
import { Block, ListGroup, Copytight } from './styles';

const year = new Date().getFullYear();

const Footer = () => (
  <Block>
    <ListGroup>
      <li>
        <a href="https://twitter.com/0x000000_net" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://github.com/kurooooon" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.wantedly.com/id/kurooooon" target="_blank">
          <SiWantedly />
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/kurooooon" target="_blank">
          <FaSoundcloud />
        </a>
      </li>
      <li>
        <a href="mailto:b1006110@gmail.com">
          <RiMailFill />
        </a>
      </li>
    </ListGroup>
    <Copytight>{`© ${year} 0x000000`}</Copytight>
  </Block>
);
export default Footer;
