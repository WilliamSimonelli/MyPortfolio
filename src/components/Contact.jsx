import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const contact = t('contact');

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      value: 'williamsimonelli.r@gmail.com',
      link: 'mailto:williamsimonelli.r@gmail.com',
      color: 'primary',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      value: '+55 (11) 96409-0708',
      link: 'tel:+5511964090708',
      color: 'secondary',
    },
    {
      icon: <LocationIcon fontSize="large" />,
      title: 'Location',
      value: contact.location,
      link: null,
      color: 'primary',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      title: 'LinkedIn',
      value: 'william-simonelli',
      link: 'https://www.linkedin.com/in/william-simonelli/',
      color: 'secondary',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,107,53,0.05) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #FF6B35, #00D4FF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            {contact.sectionTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            {contact.sectionSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(26,26,26,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: info.color === 'primary'
                      ? '0 16px 40px rgba(0,212,255,0.2)'
                      : '0 16px 40px rgba(255,107,53,0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: info.color === 'primary' ? 'rgba(0,212,255,0.1)' : 'rgba(255,107,53,0.1)',
                      color: info.color === 'primary' ? 'primary.main' : 'secondary.main',
                      mb: 2,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component={info.link ? 'a' : 'span'}
                    href={info.link || undefined}
                    target={info.link?.startsWith('http') ? '_blank' : undefined}
                    rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      wordBreak: 'break-all',
                      cursor: info.link ? 'pointer' : 'default',
                      '&:hover': info.link
                        ? { color: info.color === 'primary' ? 'primary.main' : 'secondary.main' }
                        : {},
                    }}
                  >
                    {info.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" component="h4" gutterBottom sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
            {contact.followTitle}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {[
              { href: 'https://github.com/WilliamSimonelli', icon: <GitHubIcon />, color: 'primary' },
              { href: 'https://www.linkedin.com/in/william-simonelli/', icon: <LinkedInIcon />, color: 'primary' },
              { href: 'mailto:williamsimonelli.r@gmail.com', icon: <EmailIcon />, color: 'secondary' },
            ].map(({ href, icon, color }, i) => (
              <IconButton
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'text.secondary',
                  width: 52,
                  height: 52,
                  '&:hover': {
                    backgroundColor: color === 'primary' ? 'rgba(0,212,255,0.2)' : 'rgba(255,107,53,0.2)',
                    color: color === 'primary' ? 'primary.main' : 'secondary.main',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
