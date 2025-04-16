import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: 6 }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8, py: 6, bgcolor: 'primary.main', borderRadius: 2, color: 'background.default' }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            He Team: Justice. Support. Brotherhood.
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Going through a tough time? Whether it’s divorce, a false dowry case, or custody issues — we’re here to support you. He Team offers free legal help, trusted advocates, and counseling with heart. Reach out. You’re not alone.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/register"
            sx={{ bgcolor: 'accent.main', color: 'text.primary', mr: 2, px: 4, py: 1.5 }}
          >
            Register Your Case
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/counseling"
            sx={{ bgcolor: 'teal.main', color: 'background.default', px: 4, py: 1.5 }}
          >
            Get Counseling
          </Button>
        </Box>

        {/* Challenges We Address */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ color: 'secondary.main', textAlign: 'center', mb: 4 }}>
            Challenges Indian Men Face
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: 'False Dowry Allegations',
                description: 'Facing baseless dowry charges? Our advocates specialize in defending men against misuse of laws like Section 498A.',
              },
              {
                title: 'Divorce & Alimony Disputes',
                description: 'Struggling with unfair alimony demands or divorce proceedings? We provide legal support to protect your rights.',
              },
              {
                title: 'Child Custody Battles',
                description: 'Fighting to stay connected with your children? Our experts help secure fair custody arrangements.',
              },
              {
                title: 'Workplace Harassment',
                description: 'Dealing with false workplace allegations? We offer discreet legal assistance to clear your name.',
              },
              {
                title: 'Mental Health & Stigma',
                description: 'Feeling overwhelmed by societal expectations? Our counselors provide a safe space to heal and rebuild.',
              },
            ].map((challenge) => (
              <Grid item xs={12} sm={6} md={4} key={challenge.title}>
                <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                      {challenge.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                      {challenge.description}
                    </Typography>
                    <Button
                      variant="text"
                      component={Link}
                      to="/register"
                      sx={{ color: 'accent.main' }}
                    >
                      Get Help Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Connect Across India */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: 'secondary.main', mb: 4 }}>
            Justice in Your Language, Your City
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 4, color: 'text.secondary' }}>
            Whether you're in bustling Mumbai, serene Shillong, or rural Nalgonda, He Team connects you with advocates who speak your language—Hindi, Tamil, Telugu, Bengali, or more—and understand your local legal system.
          </Typography>
          <Grid container spacing={3}>
            {[
              { city: 'Delhi', court: 'Delhi High Court', languages: 'Hindi, English' },
              { city: 'Mumbai', court: 'Bombay High Court', languages: 'Marathi, Hindi, English' },
              { city: 'Chennai', court: 'Madras High Court', languages: 'Tamil, English' },
              { city: 'Nalgonda', court: 'Nalgonda District Court', languages: 'Telugu, Hindi' },
            ].map((location) => (
              <Grid item xs={12} sm={6} md={3} key={location.city}>
                <Card sx={{ bgcolor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      {location.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {location.court}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      Languages: {location.languages}
                    </Typography>
                    <Button
                      variant="text"
                      component={Link}
                      to="/advocates"
                      sx={{ color: 'accent.main' }}
                    >
                      Find Advocates
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ color: 'secondary.main', textAlign: 'center', mb: 4 }}>
            Stories of Strength
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                name: 'Vikram S., Delhi',
                story: 'He Team helped me fight a false dowry case. Their advocate spoke Hindi and understood my situation, giving me hope when I felt alone.',
              },
              {
                name: 'Arjun R., Chennai',
                story: 'The counseling sessions were a lifeline during my divorce. I could share my struggles in Tamil, and it made all the difference.',
              },
              {
                name: 'Suresh K., Nalgonda',
                story: 'I thought I’d lose my kids forever. He Team’s legal support in Telugu helped me secure joint custody.',
              },
            ].map((testimonial) => (
              <Grid item xs={12} sm={6} md={4} key={testimonial.name}>
                <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      "{testimonial.story}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'secondary.main', borderRadius: 2, color: 'background.default' }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Are You Facing a Challenge? Let He Team Stand by You.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            No matter where you are in India or what you're going through, He Team offers free case registration and confidential support. Take the first step toward justice today.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/register"
            sx={{ bgcolor: 'accent.main', color: 'text.primary', px: 4, py: 1.5 }}
          >
            Register Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;