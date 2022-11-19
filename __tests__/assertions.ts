// Predefined type
type AssertHasProps = <Prop extends string>(props: ReadonlyArray<Prop>, value: object) => asserts value is Record<Prop, unknown>;

// Function expression with predefined type
export const assertHasProps: AssertHasProps = (props, value) => {
  // Only objects have properties
  if (typeof value !== 'object') throw new Error(`Value is not an object`);

  // Make sure it's not null
  if (value === null) {
    throw new Error('Value is null');
  }

  // Check if it has the expected properties
  for (const prop of props) if (prop in value === false) throw new Error(`Value doesn't have .${prop}`);
};
