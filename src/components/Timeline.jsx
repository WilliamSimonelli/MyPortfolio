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
import { Work as WorkIcon, School as SchoolIcon } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

const Timeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();
  const timeline = t('timeline');

  const getIcon = (type) => type === 'education'
    ? <SchoolIcon sx={{ fontSize: 26 }} />
    : <WorkIcon sx={{ fontSize: 26 }} />;
  const getColor = (index) => (index % 2 === 0 ? 'primary' : 'secondary');

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,212,255,0.05) 50%, rgba(0,0,0,0) 100%)',
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
            {timeline.sectionTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            {timeline.sectionSubtitle}
          </Typography>
        </Box>

        <MuiTimeline position={isMobile ? 'right' : 'alternate'}>
          {timeline.items.map((item, index) => {
            const color = getColor(index);
            return (
              <TimelineItem key={index}>
                {!isMobile && (
                  <TimelineOppositeContent sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ color: color === 'primary' ? 'primary.main' : 'secondary.main', fontWeight: 600 }}
                    >
                      {item.period}
                    </Typography>
                  </TimelineOppositeContent>
                )}

                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: color === 'primary' ? 'primary.main' : 'secondary.main',
                      p: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${color === 'primary' ? 'rgba(0,212,255,0.5)' : 'rgba(255,107,53,0.5)'}`,
                    }}
                  >
                    {getIcon(item.type)}
                  </TimelineDot>
                  {index < timeline.items.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: 'linear-gradient(180deg, rgba(0,212,255,0.5) 0%, rgba(255,107,53,0.5) 100%)',
                        width: 3,
                        minHeight: 80,
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card
                    sx={{
                      backgroundColor: 'rgba(26,26,26,0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 20px 40px rgba(0,212,255,0.2)' },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {isMobile && (
                        <Typography
                          variant="subtitle2"
                          sx={{ color: color === 'primary' ? 'primary.main' : 'secondary.main', fontWeight: 600, mb: 1 }}
                        >
                          {item.period}
                        </Typography>
                      )}

                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {item.title}
                      </Typography>

                      <Typography
                        variant="h6"
                        component="h4"
                        gutterBottom
                        sx={{ color: color === 'primary' ? 'primary.main' : 'secondary.main', fontWeight: 500, mb: 2 }}
                      >
                        {item.company}
                      </Typography>

                      <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {item.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: color === 'primary' ? 'rgba(0,212,255,0.1)' : 'rgba(255,107,53,0.1)',
                              color: color === 'primary' ? 'primary.main' : 'secondary.main',
                              border: `1px solid ${color === 'primary' ? 'rgba(0,212,255,0.3)' : 'rgba(255,107,53,0.3)'}`,
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </MuiTimeline>
      </Container>
    </Box>
  );
};

export default Timeline;
