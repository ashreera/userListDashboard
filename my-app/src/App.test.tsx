import { render, screen ,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('renders the landing page', async () => {
   render(<App />);
   const headingElement = screen.getByText(/Simple UserList Project/i);
   expect(headingElement).toBeInTheDocument();
});

test("renders the add userlist  form", async () => {
   render(<App />);
   //Simulate form node and verifying its value
   expect(screen.getByLabelText("Name:",{selector: 'input'})).toBeInTheDocument();
   expect(screen.getByLabelText("Email:",{selector: 'input'})).toBeInTheDocument();
   expect(screen.getByLabelText("Photo:",{selector: 'input'})).toBeInTheDocument();
 

   //Initiate the adduser request
   const addUserBtn = screen.getByText("Add User" );
   expect(addUserBtn).toBeDisabled();
   userEvent.click(addUserBtn);

   //Initiate the adduser request
   const uploadUserBtn = screen.getByText("Load User" );
   expect(uploadUserBtn).not.toBeDisabled();
   userEvent.click(uploadUserBtn);

})
