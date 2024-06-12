import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('renders the landing page', async () => {
   render(<App />);
   expect(screen.getByRole("heading")).toHaveTextContent(/Simple UserList Project/);
   expect(screen.getByRole("button", { name: "Add User" })).toBeDisabled();
});

test("renders the add userlist  form", async () => {
   render(<App />);
   //Simulate form node and verifying its value
   expect(screen.getByLabelText("username",{selector: 'input'})).toBeInTheDocument();
   expect(screen.getByLabelText("useremail",{selector: 'input'})).toBeInTheDocument();
   expect(screen.getByLabelText("userphoto",{selector: 'input'})).toBeInTheDocument();
   const file = new File(['hello'], 'hello.png', {type: 'image/*'})
   const uploadinput = screen.getByLabelText(/upload file/i)
   userEvent.upload(uploadinput, file)
 

   //Initiate the adduser request
   const addUserBtn = screen.getByRole("button", { name: "adduser" });
   expect(addUserBtn).toBeDisabled();
   userEvent.click(addUserBtn);
})
