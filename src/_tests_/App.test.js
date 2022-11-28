import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../components/App/App';

console.error = jest.fn();

jest.mock("react-leaflet", () => ({
  MapContainer: jest.fn,
  TileLayer: jest.fn,
  Marker: jest.fn,
  Popup: jest.fn,
}));

// TODO: Implement more comprehensive tests
test('Renders App', () => {
  render(<App />);
});
