import {styled} from "@mui/material";

export const LoginPage = styled("div")`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginContainer = styled("div")`
  min-width: 40%;
  min-height: 40%;
  border: 1px solid var(--text-secondary-dark);
  border-radius: 4px;
  padding: 1rem;
  color: white;
`;
export const LoginForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;