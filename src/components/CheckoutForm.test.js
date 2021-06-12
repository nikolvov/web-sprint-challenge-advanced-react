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
    const address = getByLabelText(/Address/i);
    userEvent.type(address, "1755 Llama Ave");
    const city = getByLabelText(/City/i);
    userEvent.type(city, "San Francisco");
    const state = getByLabelText(/State/i);
    userEvent.type(state, "California");
    const zip = getByLabelText(/Zip/i);
    userEvent.type(zip, "94122");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(screen.getByText(/you have/i)).toHaveTextContent("You have ordered some plants! Woo-hoo!");
});

