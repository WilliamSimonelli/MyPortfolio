import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Chip,
  IconButton,
  Zoom,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';
import profilePhoto from '../assets/portfolio-photo.jpeg';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const hero = t('hero');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToExperience = () => {
    const element = document.querySelector('#experience');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: '80px', md: '80px' },
        pb: { xs: 6, md: 0 },
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)
          `,
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Avatar */}
          <Zoom in={isVisible} timeout={1000}>
            <Box
              sx={{
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(45deg, #00D4FF, #FF6B35)',
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
                flexShrink: 0,
              }}
            >
              <Avatar
                src={profilePhoto}
                alt="William Simonelli"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  display: 'block',
                }}
              />
            </Box>
          </Zoom>

          {/* Content */}
          <Box sx={{ flex: 1, maxWidth: '600px' }}>
            <Zoom in={isVisible} timeout={1200}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}
              >
                {hero.greeting}
              </Typography>
            </Zoom>

            <Zoom in={isVisible} timeout={1400}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #FFFFFF, #B0B0B0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                }}
              >
                William Simonelli
              </Typography>
            </Zoom>

            <Zoom in={isVisible} timeout={1600}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #00D4FF, #FF6B35)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 4,
                }}
              >
                {hero.title}
              </Typography>
            </Zoom>

            <Zoom in={isVisible} timeout={1800}>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 4, maxWidth: '500px' }}
              >
                {hero.description}
              </Typography>
            </Zoom>

            {/* Skills chips */}
            <Zoom in={isVisible} timeout={2000}>
              <Box sx={{ mb: 4 }}>
                {hero.chips.map((chip) => (
                  <Chip
                    key={chip}
                    label={chip}
                    sx={{
                      m: 0.5,
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      color: 'primary.main',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      '&:hover': { backgroundColor: 'rgba(0, 212, 255, 0.2)' },
                    }}
                  />
                ))}
              </Box>
            </Zoom>

            {/* Action Buttons */}
            <Zoom in={isVisible} timeout={2200}>
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToExperience}
                  sx={{
                    background: 'linear-gradient(45deg, #00D4FF, #0099CC)',
                    '&:hover': { background: 'linear-gradient(45deg, #0099CC, #007AA3)' },
                  }}
                >
                  {hero.viewWork}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': { borderColor: 'primary.light', backgroundColor: 'rgba(0, 212, 255, 0.1)' },
                  }}
                >
                  {hero.getInTouch}
                </Button>
              </Box>
            </Zoom>

            {/* Social Links */}
            <Zoom in={isVisible} timeout={2400}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <IconButton
                  href="https://github.com/WilliamSimonelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/william-simonelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="mailto:williamsimonelli.r@gmail.com"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Box>
            </Zoom>
          </Box>
        </Box>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'bounce 2s infinite',
            cursor: 'pointer',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '40%': { transform: 'translateX(-50%) translateY(-10px)' },
              '60%': { transform: 'translateX(-50%) translateY(-5px)' },
            },
          }}
          onClick={scrollToExperience}
        >
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            {hero.scrollDown}
          </Typography>
          <ArrowDownIcon sx={{ color: 'primary.main' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
