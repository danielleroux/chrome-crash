import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'comp-b',
  styleUrl: 'comp-b.scss',
  shadow: true,
})
export class CompB {
  @State() show = false;

  connectedCallback() {
    setInterval(() => {
      this.show = !this.show;
    }, 1000);
  }

  render() {
    return (
      <Host
        class={{
          show: this.show,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
