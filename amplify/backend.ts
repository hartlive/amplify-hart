import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  // storage
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


