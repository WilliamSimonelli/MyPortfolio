import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  TabletMac as TabletMacIcon,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  backend: <StorageIcon fontSize="large" />,
  cloud: <CloudIcon fontSize="large" />,
  frontend: <CodeIcon fontSize="large" />,
  tools: <BuildIcon fontSize="large" />,
  ios: <TabletMacIcon fontSize="large" />,
};

const Skills = () => {
  const { t } = useLanguage();
  const skills = t('skills');

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,107,53,0.05) 0%, rgba(0,0,0,0) 50%, rgba(0,212,255,0.05) 100%)',
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
            {skills.sectionTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            {skills.sectionSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skills.categories.map((category, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(26,26,26,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: category.color === 'primary'
                      ? '0 20px 40px rgba(0,212,255,0.2)'
                      : '0 20px 40px rgba(255,107,53,0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: category.color === 'primary' ? 'rgba(0,212,255,0.1)' : 'rgba(255,107,53,0.1)',
                        color: category.color === 'primary' ? 'primary.main' : 'secondary.main',
                        mr: 2,
                      }}
                    >
                      {iconMap[category.icon]}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill.name}
                        sx={{
                          backgroundColor: category.color === 'primary'
                            ? 'rgba(0,212,255,0.1)'
                            : 'rgba(255,107,53,0.1)',
                          color: category.color === 'primary' ? 'primary.main' : 'secondary.main',
                          border: `1px solid ${category.color === 'primary' ? 'rgba(0,212,255,0.3)' : 'rgba(255,107,53,0.3)'}`,
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: category.color === 'primary'
                              ? 'rgba(0,212,255,0.2)'
                              : 'rgba(255,107,53,0.2)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4, color: 'text.primary', fontWeight: 600 }}>
            {skills.certificationsTitle}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {skills.certifications.map((cert, index) => (
              <Chip
                key={index}
                label={cert}
                variant="outlined"
                sx={{
                  py: 1,
                  px: 2,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  backgroundColor: 'rgba(0,212,255,0.1)',
                  '&:hover': { backgroundColor: 'rgba(0,212,255,0.2)', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
