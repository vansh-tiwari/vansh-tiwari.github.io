import { darkTheme as theme} from "../../helper/themes";

//Theme issues importing everywehere whenvever change the mode

export const styles = {
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    width: '100%',
    display: 'flex',
    maxWidth: '100%',
    gap: '12px',
  },
  image: {
    height: {xs: '40px', md: '50px'},
    borderRadius: '10px',
    marginTop: '4px',
  },
  name: {
    fontSize: { xs: '14px', md: '18px' },
    fontWeight: 600,
    color: theme.text_primary + 99,
  },
  degree: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: 500,
    color: theme.text_primary + 99,
  },
  passed: {
    fontSize: { xs: '10px', md: '12px' },
    fontWeight: 400,
    color: theme.text_primary + 99,
  },
  grade: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: 500,
    color: theme.text_primary + 99,
  },
  description: {
    width: '100%',
    fontSize: { xs: '12px', md: '15px' },
    fontWeight: 400,
    color: theme.text_primary + 99,
    marginBottom: '10px',
  },
  contentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: theme.card_dark+99,
    color: "#fff",
    boxShadow: `${theme.card+99} 0px 4px 24px`,
    backgroundColor: theme.card_dark,
    border: `1px solid ${theme.card}`,
    borderRadius: "6px",
  },
  contentArrowStyle: {
    borderRight: `7px solid  ${theme.card}+80`,
  }
}

export const experienceStyles = {
  role: {
    fontSize: { xs: '14px', md: '18px' },
    fontWeight: '600',
    color: theme.text_primary + 99,
  },
  company: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
    color: theme.text_secondary + 99,
  },
  date: {
    fontSize: { xs: '10px', md: '12px' },
    fontWeight: '400',
    color: theme.text_secondary + 99,
  },
  grade: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
    color: theme.text_secondary + 99,
  },
  description: {
    width: '100%',
    fontSize: { xs: '12px', md: '15px' },
    fontWeight: '400',
    color: theme.text_primary + 99,
    marginBottom: '10px',
  },
  span: {
    display: '-webkit-box',
    maxWidth: '100%',
  },
  skills: {
    width: '100%',
    display: 'flex',
    gap: '12px',
    marginTop: '-10px',
  },
  skill: {
    fontSize: { xs: '12px', md: '15px' },
    fontWeight: '400',
    color: theme.secondary,
  },
  itemWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
};

export const projectStyles = {
  card: {
    width: '330px',
    height: '490px',
    backgroundColor: theme.card,
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0 0 12px 4px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
    padding: '26px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    transition: 'all 0.15s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 40px 4px rgba(0, 0, 0, 0.5)',
      filter: 'brightness(1.08)',
    },
  },
  image: {
    width: '100%',
    height: '180px',
    backgroundColor: theme.white,
    borderRadius: '10px',
    boxShadow: '0 0 16px 2px rgba(0, 0, 0, 0.3)',
  },
  tags: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '4px',
  },
  tag: {
    fontSize: '12px',
    fontWeight: '400',
    color: theme.primary,
    backgroundColor: theme.primary + 15,
    padding: '2px 8px',
    borderRadius: '10px',
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    padding: '0px 2px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.text_secondary,
    overflow: 'hidden',
    display: '-webkit-box',
    maxWidth: '100%',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  },
  date: {
    fontSize: { xs: '10px', md: '12px' },
    marginLeft: '2px',
    fontWeight: '400',
    color: theme.text_secondary + 80,
  },
  description: {
    fontWeight: '400',
    color: theme.text_secondary + 99,
    overflow: 'hidden',
    marginTop: '8px',
    display: '-webkit-box',
    maxWidth: '100%',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  },
  members: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
  },
  avatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    marginLeft: '-10px',
    backgroundColor: theme.white,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    border: '3px solid',
    borderColor: theme.card,
  },
  button: {
    color: theme.primary,
    textDecoration: 'none',
    fontWeight: '600',
    textAlign: 'center',
  },
};
