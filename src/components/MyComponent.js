import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { SRLWrapper } from "simple-react-lightbox";

export default class MyComponent extends Component {
    static propTypes = {
        EventImages: PropTypes.array.isRequired, 
      }
      render() {
        const { EventImages } = this.props;
        return (
            <div className="MyComponent">
              <SRLWrapper>
              {EventImages.map((image, i) => (  
                <div key={i}>
                    <img className="img-responsive" alt="Culture" loading="lazy" src={image.source_url}  />                           
                </div>
                ))}
                // This will be your content with the images. It can be anything. Content defined by yourself, content fetched from an API, data from a graphQL query... anything :)
              </SRLWrapper>
            </div>
          );

      }
  
}