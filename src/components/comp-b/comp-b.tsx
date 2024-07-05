import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'comp-b',
  styleUrl: 'comp-b.scss',
  shadow: true,
})
export class CompB {
  render() {
    return (
      <Host
        class={{
          show: false,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
