import { Clickable, Contact, Contacts, Container, Icon } from './styles';
import LinkedInLogo from '../../assets/linkedin.svg';
import GitHubLogo from '../../assets/github.svg';
import FacebookLogo from '../../assets/facebook.svg';
import TwitterLogo from '../../assets/twitter.svg';

export function Footer() {
  const CONTACTS = [
    {
      icon: LinkedInLogo,
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/prmlimajr/'
    },
    {
      icon: TwitterLogo,
      name: 'twitter',
      url: 'https://twitter.com/prmlimajr'
    },
    {
      icon: FacebookLogo,
      name: 'facebook',
      url: 'https://www.facebook.com/paulo.lima.9279'
    },
    {
      icon: GitHubLogo,
      name: 'github',
      url: 'https://github.com/prmlimajr'
    }
  ];

  return (
    <Container>
      <Contacts>
        {CONTACTS.map((contact, index) => {
          return (
            <Contact key={index}>
              <Clickable href={contact.url}>
                <Icon src={contact.icon} alt={contact.name} />
              </Clickable>
            </Contact>
          );
        })}
      </Contacts>
    </Container>
  );
}
