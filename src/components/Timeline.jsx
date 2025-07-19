import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
} from '@mui/icons-material';

const Timeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Brazil',
      period: '2022 - Present',
      description: 'Developing scalable web applications using React.js, Node.js, and PostgreSQL. Leading frontend architecture decisions and implementing responsive designs following modern UI/UX principles. Collaborating with cross-functional teams using Agile methodologies.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Material-UI'],
      icon: <WorkIcon />,
      color: 'primary',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovation Agency',
      period: '2021 - 2022',
      description: 'Built responsive web applications and e-commerce platforms for Brazilian clients. Worked with modern JavaScript frameworks and ensured cross-browser compatibility. Participated in code reviews and maintained high code quality standards.',
      skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
      icon: <CodeIcon />,
      color: 'secondary',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupBR Tech',
      period: '2020 - 2021',
      description: 'Started career developing company websites and internal management systems. Learned best practices in web development, version control with Git, and agile development processes. Contributed to both frontend and backend development.',
      skills: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
      icon: <CodeIcon />,
      color: 'primary',
    },
    {
      title: 'Bachelor in Computer Science',
      company: 'Federal University of Technology',
      period: '2017 - 2020',
      description: 'Bachelor\'s degree in Computer Science with focus on software engineering, algorithms, and data structures. Completed final project on web application development. Participated in programming competitions and tech study groups.',
      skills: ['Java', 'C++', 'Python', 'Data Structures', 'Software Engineering'],
      icon: <SchoolIcon />,
      color: 'secondary',
    },
    {
      title: 'Technical Course in Systems Development',
      company: 'SENAC - São Paulo',
      period: '2015 - 2017',
      description: 'Technical course in Systems Development focusing on programming fundamentals, database design, and web development. First contact with professional software development practices and project management.',
      skills: ['Programming Logic', 'Database Design', 'Web Development', 'Project Management'],
      icon: <SchoolIcon />,
      color: 'primary',
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #00D4FF, #FF6B35)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Experience & Education
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            My professional journey and the experiences that shaped my expertise in software development.
          </Typography>
        </Box>

        <MuiTimeline position={isMobile ? 'right' : 'alternate'}>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ 
                    m: 'auto 0',
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    {experience.period}
                  </Typography>
                </TimelineOppositeContent>
              )}
              
              <TimelineSeparator>
                <TimelineDot
                  color={experience.color}
                  sx={{
                    bgcolor: experience.color === 'primary' ? 'primary.main' : 'secondary.main',
                    width: 60,
                    height: 60,
                    boxShadow: `0 0 20px ${experience.color === 'primary' ? 'rgba(0, 212, 255, 0.5)' : 'rgba(255, 107, 53, 0.5)'}`,
                  }}
                >
                  {experience.icon}
                </TimelineDot>
                {index < experiences.length - 1 && (
                  <TimelineConnector
                    sx={{
                      background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.5) 0%, rgba(255, 107, 53, 0.5) 100%)',
                      width: 3,
                      minHeight: 100,
                    }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {isMobile && (
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {experience.period}
                      </Typography>
                    )}
                    
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600, color: 'text.primary' }}
                    >
                      {experience.title}
                    </Typography>
                    
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{ 
                        color: experience.color === 'primary' ? 'primary.main' : 'secondary.main',
                        fontWeight: 500,
                        mb: 2,
                      }}
                    >
                      {experience.company}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      paragraph
                      sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}
                    >
                      {experience.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: experience.color === 'primary' 
                              ? 'rgba(0, 212, 255, 0.1)' 
                              : 'rgba(255, 107, 53, 0.1)',
                            color: experience.color === 'primary' ? 'primary.main' : 'secondary.main',
                            border: `1px solid ${experience.color === 'primary' 
                              ? 'rgba(0, 212, 255, 0.3)' 
                              : 'rgba(255, 107, 53, 0.3)'}`,
                            '&:hover': {
                              backgroundColor: experience.color === 'primary' 
                                ? 'rgba(0, 212, 255, 0.2)' 
                                : 'rgba(255, 107, 53, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </MuiTimeline>
      </Container>
    </Box>
  );
};

export default Timeline;
