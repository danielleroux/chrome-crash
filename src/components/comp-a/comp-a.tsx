import { Component, Fragment, Host, State, h } from '@stencil/core';

@Component({
  tag: 'comp-a',
  styleUrl: 'comp-a.css',
  shadow: true,
})
export class CompA {
  @State() isDesktop: boolean = false;

  connectedCallback() {
    window.matchMedia('(min-width: 500px)').addEventListener('change', () => {
      this.isDesktop = window.matchMedia('(min-width: 500px)').matches;
    });
  }

  render() {
    return (
      <Host>
        {this.isDesktop ? (
          <div>
            Desktop
            <slot></slot>
          </div>
        ) : (
          <Fragment>
            <comp-b>
              Mobile
              <slot></slot>
            </comp-b>
          </Fragment>
        )}
      </Host>
    );
  }
}
