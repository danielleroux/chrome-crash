import { Component, Host, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'comp-a',
  styleUrl: 'comp-a.css',
  shadow: true,
})
export class CompA {
  @State() doTheCrash: boolean = false;

  @State() isResized = false;

  /** has nothing to do with the issue */
  @Listen('resize', { target: 'window' })
  onResize() {
    this.isResized = true;
  }
  /** has nothing to do with the issue */

  render() {
    return (
      <Host>
        <p>Make sure you have dev tools open before enter the localhost:3333 OR resize it ones after open the dev tools</p>
        <button onClick={() => (this.doTheCrash = !this.doTheCrash)}>{!this.isResized ? 'Resize window via dev Console' : 'Crash the chrome now!'}</button>
        {this.doTheCrash ? (
          <div>
            Desktop
            <slot></slot>
          </div>
        ) : (
          <comp-b>
            Mobile
            <slot></slot>
          </comp-b>
        )}
      </Host>
    );
  }
}
