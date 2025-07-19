import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #00D4FF, #FF6B35)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              William Simonelli
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Full Stack Developer passionate about creating innovative solutions 
              and bridging the gap between design and functionality.
            </Typography>
          </Grid>

          {/* Center Section - Navigation */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Section - Social Links */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
              >
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                <IconButton
                  href="https://github.com/WilliamSimonelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/william-simonelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="mailto:williamsimonelli10@gmail.com"
                  sx={{
                    color: 'text.secondary',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      color: 'secondary.main',
                      backgroundColor: 'rgba(255, 107, 53, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', textAlign: { xs: 'center', sm: 'left' } }}
          >
            © {currentYear} William Simonelli. All rights reserved. Built with React & Material-UI.
          </Typography>
          
          <IconButton
            onClick={scrollToTop}
            sx={{
              color: 'text.secondary',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
