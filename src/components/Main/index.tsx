import { FeedbackForm } from '../FeedbackForm';
import { Footer } from '../Footer';
import { Container, FeedbackFormWrapper } from './styles';

export function Main() {
  return (
    <Container>
      <FeedbackFormWrapper>
        <FeedbackForm />
      </FeedbackFormWrapper>
      <Footer />
    </Container>
  );
}
