import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <CodeIcon fontSize="large" />,
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Material-UI/Styled Components', level: 80 },
        { name: 'Responsive Design', level: 90 },
      ],
      color: 'primary',
    },
    {
      title: 'Backend',
      icon: <StorageIcon fontSize="large" />,
      skills: [
        { name: 'Node.js/Express', level: 80 },
        { name: 'Python/Django', level: 70 },
        { name: 'PostgreSQL/MySQL', level: 75 },
        { name: 'MongoDB', level: 65 },
        { name: 'REST APIs/GraphQL', level: 80 },
      ],
      color: 'secondary',
    },
    {
      title: 'DevOps & Tools',
      icon: <CloudIcon fontSize="large" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'AWS/Heroku', level: 70 },
        { name: 'Docker', level: 60 },
        { name: 'CI/CD Pipelines', level: 65 },
        { name: 'Linux/Terminal', level: 75 },
      ],
      color: 'primary',
    },
    {
      title: 'Other Skills',
      icon: <BuildIcon fontSize="large" />,
      skills: [
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Testing (Jest/Cypress)', level: 70 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 95 },
        { name: 'Project Management', level: 75 },
      ],
      color: 'secondary',
    },
  ];

  const certifications = [
    'FreeCodeCamp - Full Stack Web Development',
    'React - The Complete Guide (Udemy)',
    'JavaScript Algorithms and Data Structures',
    'Responsive Web Design Certification',
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255, 107, 53, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 212, 255, 0.05) 100%)',
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            Technical skills and tools I use to bring ideas to life and solve complex problems.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: category.color === 'primary' 
                      ? '0 20px 40px rgba(0, 212, 255, 0.2)'
                      : '0 20px 40px rgba(255, 107, 53, 0.2)',
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
                        backgroundColor: category.color === 'primary' 
                          ? 'rgba(0, 212, 255, 0.1)' 
                          : 'rgba(255, 107, 53, 0.1)',
                        color: category.color === 'primary' ? 'primary.main' : 'secondary.main',
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600, color: 'text.primary' }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: category.color === 'primary' ? 'primary.main' : 'secondary.main',
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Certifications */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ mb: 4, color: 'text.primary', fontWeight: 600 }}
          >
            Certifications
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {certifications.map((cert, index) => (
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
                  backgroundColor: 'rgba(0, 212, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 212, 255, 0.2)',
                    transform: 'translateY(-2px)',
                  },
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
