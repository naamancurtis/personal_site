import React, { useEffect, useState, FC } from 'react';

import * as serviceWorker from '../../serviceWorker';
import Alert from '../../atoms/alert/alert.component';

const ServiceWorkerWrapper: FC = () => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    window.location.reload(true);
  };

  return (
    <>
      {showReload === true ? (
        <Alert
          text="A new version of this page is available"
          buttonText="Update"
          onButtonClick={reloadPage}
        />
      ) : null}
    </>
  );
};

export default ServiceWorkerWrapper;
