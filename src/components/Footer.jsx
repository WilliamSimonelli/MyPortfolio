import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const footer = t('footer');
  const nav = t('nav');
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navItems = [
    { label: nav.about, href: '#about' },
    { label: nav.experience, href: '#experience' },
    { label: nav.skills, href: '#skills' },
    { label: nav.contact, href: '#contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
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
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {footer.description}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                {footer.quickLinks}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    variant="body2"
                    component="a"
                    href={item.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                {footer.connect}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
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
                      color: 'text.secondary',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      '&:hover': {
                        color: color === 'primary' ? 'primary.main' : 'secondary.main',
                        backgroundColor: color === 'primary' ? 'rgba(0,212,255,0.1)' : 'rgba(255,107,53,0.1)',
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
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

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
            © {currentYear} William Simonelli. {footer.rights}
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              color: 'text.secondary',
              backgroundColor: 'rgba(255,255,255,0.05)',
              '&:hover': { color: 'primary.main', backgroundColor: 'rgba(0,212,255,0.1)', transform: 'translateY(-2px)' },
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
