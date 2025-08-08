import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

defineBackend({
  auth,
  data
});

backend.addOutput({
  storage: {
    aws_region: 'eu-central-1',
    bucket_name: 'hart-eu',

    buckets: [
      {
        aws_region: 'eu-central-1',
        bucket_name: 'hart-eu',
        name: 'hart-eu',
        paths: {
          'public/*': {
            guest: ['read', 'write'],
            authenticated: ['read', 'write'],
          },
          'protected/{entity_id}/*': {
            authenticated: ['read', 'write'],
            entityidentity: ['read', 'write']
          },
          'private/{entity_id}/*': {
            entityidentity: ['read', 'write']
          }
        }
      }
    ]
  }
})
