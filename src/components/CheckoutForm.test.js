import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});
    
test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const { getByLabelText } = screen;
    const first = getByLabelText(/First Name/i);
    userEvent.type(first, "Niko");
    const last = getByLabelText(/Last Name/i);
    userEvent.type(last, "Lvov");
    screen.debug();
});

