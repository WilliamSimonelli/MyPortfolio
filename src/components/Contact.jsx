import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      value: 'williamsimonelli10@gmail.com',
      link: 'mailto:williamsimonelli10@gmail.com',
      color: 'primary',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      value: '+55 (11) 99999-8888',
      link: 'tel:+5511999998888',
      color: 'secondary',
    },
    {
      icon: <LocationIcon fontSize="large" />,
      title: 'Location',
      value: 'São Paulo, Brazil',
      link: null,
      color: 'primary',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      title: 'LinkedIn',
      value: 'william-simonelli',
      link: 'https://linkedin.com/in/william-simonelli',
      color: 'secondary',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSnackbarMessage('Message sent successfully! I\'ll get back to you soon.');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255, 107, 53, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
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
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            I'm always interested in new opportunities and interesting projects. 
            Let's connect and discuss how we can work together.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{ mb: 4, color: 'text.primary', fontWeight: 600 }}
            >
              Contact Information
            </Typography>
            
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={12} key={index}>
                  <Card
                    sx={{
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: info.color === 'primary' 
                          ? '0 10px 30px rgba(0, 212, 255, 0.2)'
                          : '0 10px 30px rgba(255, 107, 53, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          backgroundColor: info.color === 'primary' 
                            ? 'rgba(0, 212, 255, 0.1)' 
                            : 'rgba(255, 107, 53, 0.1)',
                          color: info.color === 'primary' ? 'primary.main' : 'secondary.main',
                          mr: 3,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h4"
                          sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ 
                            color: 'text.secondary',
                            cursor: info.link ? 'pointer' : 'default',
                            textDecoration: 'none',
                            '&:hover': info.link ? {
                              color: info.color === 'primary' ? 'primary.main' : 'secondary.main',
                            } : {},
                          }}
                          component={info.link ? 'a' : 'span'}
                          href={info.link || undefined}
                          target={info.link && info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link && info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Social Links */}
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h6"
                component="h4"
                gutterBottom
                sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}
              >
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://github.com/WilliamSimonelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 212, 255, 0.2)',
                      color: 'primary.main',
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
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 212, 255, 0.2)',
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="mailto:williamsimonelli@example.com"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 53, 0.2)',
                      color: 'secondary.main',
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

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{ mb: 4, color: 'text.primary', fontWeight: 600 }}
            >
              Send Me a Message
            </Typography>

            <Card
              sx={{
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    sx={{ mb: 3 }}
                    InputProps={{
                      sx: { color: 'text.primary' },
                    }}
                    InputLabelProps={{
                      sx: { color: 'text.secondary' },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    sx={{ mb: 3 }}
                    InputProps={{
                      sx: { color: 'text.primary' },
                    }}
                    InputLabelProps={{
                      sx: { color: 'text.secondary' },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    sx={{ mb: 3 }}
                    InputProps={{
                      sx: { color: 'text.primary' },
                    }}
                    InputLabelProps={{
                      sx: { color: 'text.secondary' },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    sx={{
                      background: 'linear-gradient(45deg, #00D4FF, #FF6B35)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0099CC, #CC4A1A)',
                      },
                      py: 1.5,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
