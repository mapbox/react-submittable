import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Submittable from '../src/submittable.js';
import React from 'react';

describe('Submittable', function() {
  it('calls onEnter when it gets an enter event', async function() {
    const onEnter = jest.fn();
    render(
      <Submittable onEnter={onEnter}>
        <input type='text' />
      </Submittable>);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.keyboard('[Enter]');

    await expect(onEnter).toHaveBeenCalledTimes(1)
  });

  it('calls onCancel when it gets an exit event and has a binding', async function() {
    const onCancel = jest.fn();
    render(
      <Submittable onCancel={onCancel}>
        <input type='text' />
      </Submittable>);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.keyboard('[Escape]');

    await expect(onCancel).toHaveBeenCalledTimes(1)
  });

  it('does not pass Submittable-specific props to the <form> element', async function() {
    render(
      <Submittable
        onCancel={jest.fn()}
        onEnter={jest.fn()}
        data-testid='foobar'
        disabled={true}>
        <input type='text' />
      </Submittable>);

    const form = screen.getByTestId('foobar');
    expect(form.getAttribute('data-testid')).toBe('foobar');
    expect(form.hasAttribute('disabled')).toBe(true);
    expect(form.hasAttribute('onCancel')).toBe(false);
    expect(form.hasAttribute('onEnter')).toBe(false);
  });
});
