import { FaTwitter, FaSoundcloud } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import { Block, ListGroup, Copytight } from './styles';

const Footer = () => (
  <Block>
    <ListGroup>
      <li>
        <a href="https://twitter.com/0x000000_net" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/kurooooon" target="_blank">
          <FaSoundcloud />
        </a>
      </li>
      <li>
        <a href="mailto:0x000000.official@gmail.com">
          <RiMailFill />
        </a>
      </li>
    </ListGroup>
    <Copytight>© 2021 0x000000,Inc.</Copytight>
  </Block>
);
export default Footer;
