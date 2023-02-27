import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import TotalDisplay from './components/TotalDisplay';

test('display total value', () => {
  render(<TotalDisplay />);
  expect(screen.getByTestId('total-display')).toBeInTheDocument(); // expect the total display to show the value added to memory
});

test('multiply two numbers correctly', () => {
  render(<App><TotalDisplay/></App>);
  const totalDisplay = screen.getByTestId('total-display');
  const num1Btn = screen.getByText('5');
  const num2Btn = screen.getByText('2');
  const multiplyBtn=screen.getByText("*");

  // Click the number 1 button
  fireEvent.click(num1Btn);
  expect(totalDisplay).toHaveTextContent('5');

 fireEvent.click(multiplyBtn);
 expect(totalDisplay).toHaveTextContent("5")
  // Click the number 2 button
  fireEvent.click(num2Btn);
  expect(totalDisplay).toHaveTextContent('10');

});

test("MC button reseting memory", () => {
  render(<App />);
  const numBtn=screen.getByText('5');
  const totalDisplay = screen.getByTestId('total-display');
  const memButton = screen.getByText("M+");
  const MCbutton = screen.getByText("MC");

  fireEvent.click(numBtn);
  expect(totalDisplay).toHaveTextContent('5');

    fireEvent.click(memButton);
    waitFor(()=>{
    expect(screen.getByText("Memory: ")).toHaveTextContent("Memory:5");
  });

    fireEvent.click(MCbutton);
    waitFor(()=>{
    expect(screen.getByText("Memory: ")).toHaveTextContent("Memory:0");
  });

});