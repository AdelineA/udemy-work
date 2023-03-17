import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerExample() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
       <div class="boder border-gray-100 w-full">
                  <p>Web Development</p>
                  <p>Business</p>
                  <p>Web Development</p>
                  <p>Business</p>
                  <p>Web Development</p>
                  <p>Business</p>
                  <p>Web Development</p>
                  <p>Business</p>
                  <p>Web Development</p>
                  <p>Business</p>
                </div>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success"></Button>
    </OverlayTrigger>
  );
}

export default TriggerExample;