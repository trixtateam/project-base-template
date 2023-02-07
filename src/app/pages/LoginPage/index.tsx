/**
 *
 * LoginPage
 *
 */
import { ReservedTrixtaRoles } from '@trixtateam/trixta-js-core';
import {
  TrixtaActionComponent,
  TrixtaLoginWidget,
  TrixtaReactionComponent,
} from '@trixtateam/trixta-js-rjsf';
import { PageWrapper } from '../../components/PageWrapper';

interface Props {}

export function LoginPage(props: Props) {
  return (
    <PageWrapper>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          backgroundColor: '#dce6ea',
        }}
      >
        <TrixtaLoginWidget />
      </div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
        }}
      >
        <TrixtaActionComponent
          actionName="example"
          roleName={ReservedTrixtaRoles.EVERYONE_AUTHED}
        />
      </div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
        }}
      >
        <TrixtaReactionComponent
          reactionName="welcome"
          requestForEffect
          roleName={ReservedTrixtaRoles.EVERYONE_AUTHED}
        />
      </div>
    </PageWrapper>
  );
}
