import { StateHookComponent } from './hooks/StateHookComponent';
import { StateHookCheckbox } from './hooks/StateHookCheckbox';
import { StateBatchUpdate } from './hooks/StateBatchUpdate';
import { SimpleContextComponent } from './hooks/context/SimpleContextComponent';
import { MultiContextComponent } from './hooks/context/MultiContextComponent';
import { SimpleRefHook } from './hooks/ref/SimpleRefHook';
import { DOMElementRef } from './hooks/ref/DOMElementRef';
import { PassRefParent } from './hooks/ref/PassRefParent';
import { ImperativeHandleHandle } from './hooks/ref/ImperativeHandleComponent';
import { SimpleUseEffectComponent } from './hooks/effect/SimpleUseEffectComponent';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <h1>Simple hook</h1>
          <StateHookComponent />
        </div>

        <div>
          <h1>Checkbox hook</h1>
          <StateHookCheckbox />
        </div>

        <div>
          <h1>Batch status update</h1>
          <StateBatchUpdate />
        </div>
        <br />
        <div>
          <h1>Use Context Hook</h1>
          <SimpleContextComponent />
        </div>
        <div>
          <h1>Use multiple context</h1>
          <MultiContextComponent />
        </div>
        <br></br>
        <section>
          <h1>Use simple ref</h1>
          <SimpleRefHook />
        </section>
        <br></br>
        <section>
          <h1>Use DOM element ref</h1>
          <DOMElementRef />
        </section>
        <section>
          <h1>Use child DOM element ref</h1>
          <PassRefParent />
        </section>
        <section>
          <h1>Imperative Handle</h1>
          <ImperativeHandleHandle />
        </section>
        <section>
          <h1>Use effect component</h1>
          <SimpleUseEffectComponent />
        </section>
      </div>
    </main>
  );
}
