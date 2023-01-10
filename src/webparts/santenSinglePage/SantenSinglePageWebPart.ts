import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import '@fontsource/atkinson-hyperlegible';

import * as strings from 'SantenSinglePageWebPartStrings';
import SantenSinglePage from './app/SantenSinglePage';
import { ISantenSinglePageProps } from './app/ISantenSinglePageProps';
import { getSP } from '../../pnpjsConfig';
import store from './app/store';

export interface ISantenSinglePageWebPartProps {
  description: string;
}

export default class SantenSinglePageWebPart extends BaseClientSideWebPart<ISantenSinglePageWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISantenSinglePageProps> =
      React.createElement(SantenSinglePage, {
        webpartWidth: this.width,
        absoluteUrl: this.context.pageContext.site.absoluteUrl,
        serverRelativeUrl: this.context.pageContext.site.serverRelativeUrl,
        serverRequestPath: this.context.pageContext.site.serverRequestPath,
      });

    ReactDom.render(
      React.createElement(Provider, {
        store: store,
        children: React.createElement(BrowserRouter, {}, element),
      }),
      this.domElement
    );
  }

  protected async onInit(): Promise<void> {
    await super.onInit();

    getSP(this.context);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected onAfterResize(newWidth: number): void {
    this.render();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
