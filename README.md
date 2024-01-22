# @React-Three/Fiber Example Standalone Test

I pulled out the example folder from the @react-three/fiber project.

When I did this I found a few issues.  To reproduce do the following:

## SyntaxError: Importing binding name 'ContinuousEventPriority' is not found.

```sh
npm install
npm run dev
# when you load this into the browser it will fail with the error message: "SyntaxError: Importing binding name 'ContinuousEventPriority' is not found."
```

## Many type errors

```sh
npm run typecheck
```

Output:
```
node_modules/@react-three/fiber/dist/declarations/src/core/index.d.ts:14:187 - error TS2694: Namespace '"/Users/bhouston/Coding/OpenSource/r3f-examples/node_modules/@types/three/index"' has no exported member 'XRFrame'.

14 declare const invalidate: (state?: RootState | undefined, frames?: number) => void, advance: (timestamp: number, runGlobalEffects?: boolean, state?: RootState | undefined, frame?: THREE.XRFrame | undefined) => void;
                                                                                                                                                                                             ~~~~~~~

node_modules/@react-three/fiber/dist/declarations/src/core/loop.d.ts:32:117 - error TS2694: Namespace '"/Users/bhouston/Coding/OpenSource/r3f-examples/node_modules/@types/three/index"' has no exported member 'XRFrame'.

32     advance: (timestamp: number, runGlobalEffects?: boolean, state?: RootState | undefined, frame?: import("three").XRFrame | undefined) => void;
                                                                                                                       ~~~~~~~

node_modules/@react-three/fiber/dist/declarations/src/core/store.d.ts:136:225 - error TS2694: Namespace '"/Users/bhouston/Coding/OpenSource/r3f-examples/node_modules/@types/three/index"' has no exported member 'XRFrame'.

136 declare const createStore: (invalidate: (state?: RootState | undefined, frames?: number | undefined) => void, advance: (timestamp: number, runGlobalEffects?: boolean | undefined, state?: RootState | undefined, frame?: THREE.XRFrame | undefined) => void) => UseBoundStore<RootState>;
                                                                                                                                                                                                                                    ~~~~~~~

node_modules/styled-components/dist/models/ServerStyleSheet.d.ts:1:23 - error TS2688: Cannot find type definition file for 'node'.

1 /// <reference types="node" />
                        ~~~~

node_modules/styled-components/dist/models/ServerStyleSheet.d.ts:3:38 - error TS2307: Cannot find module 'stream' or its corresponding type declarations.

3 import type * as streamInternal from 'stream';
                                       ~~~~~~~~

node_modules/styled-components/dist/models/ServerStyleSheet.d.ts:4:26 - error TS2307: Cannot find module 'stream' or its corresponding type declarations.

4 import { Readable } from 'stream';
                           ~~~~~~~~

node_modules/use-error-boundary/lib/ErrorBoundary.d.ts:55:5 - error TS2416: Property 'render' in type 'ErrorBoundary' is not assignable to the same property in base type 'PureComponent<ErrorBoundaryProps, ErrorBoundaryState, any>'.
  Type '() => {} | null | undefined' is not assignable to type '() => ReactNode'.
    Type '{} | null | undefined' is not assignable to type 'ReactNode'.
      Type '{}' is not assignable to type 'ReactNode'.

55     render(): {} | null | undefined;
       ~~~~~~

src/demos/Lines.tsx:9:6 - error TS7006: Parameter 'e' implicitly has an 'any' type.

9     (e) => {
       ~

src/demos/Lines.tsx:16:6 - error TS7006: Parameter 'e' implicitly has an 'any' type.

16     (e) => {
        ~

src/demos/Lines.tsx:63:49 - error TS2698: Spread types may only be created from object types.

63     <mesh position={position} {...bindDrag} {...bindHover}>
                                                   ~~~~~~~~~

src/demos/Lines.tsx:121:20 - error TS2739: Type '{ Line: { threshold: number; }; }' is missing the following properties from type 'RaycasterParameters': Mesh, LOD, Points, Sprite

121       raycaster={{ params: { Line: { threshold: 5 } } }}
                       ~~~~~~

src/demos/MultiView.tsx:21:27 - error TS2698: Spread types may only be created from object types.

21     <group {...props} {...spread} dispose={null}>
                             ~~~~~~

src/demos/MultiView.tsx:77:32 - error TS7006: Parameter 'event' implicitly has an 'any' type.

77   const compute = useCallback((event, state) => {
                                  ~~~~~

src/demos/MultiView.tsx:77:39 - error TS7006: Parameter 'state' implicitly has an 'any' type.

77   const compute = useCallback((event, state) => {
                                         ~~~~~

src/demos/MultiView.tsx:95:11 - error TS2739: Type '{ width: number; height: number; }' is missing the following properties from type 'Size': top, left

95           size: { width: size.width / 2, height: size.height / 2 },
             ~~~~

src/demos/Pointcloud.tsx:34:30 - error TS7006: Parameter 'e' implicitly has an 'any' type.

34   const hover = useCallback((e) => {
                                ~

src/demos/Pointcloud.tsx:40:32 - error TS7006: Parameter 'e' implicitly has an 'any' type.

40   const unhover = useCallback((e) => {
                                  ~

src/demos/Pointcloud.tsx:61:20 - error TS2739: Type '{ Points: { threshold: number; }; }' is missing the following properties from type 'RaycasterParameters': Mesh, Line, LOD, Sprite

61       raycaster={{ params: { Points: { threshold: 0.2 } } }}>
                      ~~~~~~

src/demos/Portals.tsx:73:32 - error TS7006: Parameter 'event' implicitly has an 'any' type.

73   const compute = useCallback((event, state, previous) => {
                                  ~~~~~

src/demos/Portals.tsx:73:39 - error TS7006: Parameter 'state' implicitly has an 'any' type.

73   const compute = useCallback((event, state, previous) => {
                                         ~~~~~

src/demos/Portals.tsx:73:46 - error TS7006: Parameter 'previous' implicitly has an 'any' type.

73   const compute = useCallback((event, state, previous) => {
                                                ~~~~~~~~

src/demos/Portals.tsx:110:12 - error TS2786: 'Test' cannot be used as a JSX component.
  Its type '() => void' is not a valid JSX element type.
    Type '() => void' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
      Type 'void' is not assignable to type 'ReactNode'.

110           <Test />
               ~~~~

src/demos/Reparenting.tsx:7:36 - error TS7006: Parameter 'e' implicitly has an 'any' type.

7   const handleClick = useCallback((e) => set((state) => !state), [])
                                     ~

src/demos/StopPropagation.tsx:10:27 - error TS2698: Spread types may only be created from object types.

10     <group {...props} {...spread} dispose={null}>
                             ~~~~~~

src/demos/StopPropagation.tsx:41:38 - error TS7006: Parameter 'e' implicitly has an 'any' type.

41   const onPointerOver = useCallback((e) => {
                                        ~

src/demos/StopPropagation.tsx:45:37 - error TS7006: Parameter 'e' implicitly has an 'any' type.

45   const onPointerOut = useCallback((e) => {
                                       ~

src/demos/SVGRenderer.tsx:51:44 - error TS2344: Type 'HTMLElement' does not satisfy the constraint 'Canvas'.
  Type 'HTMLElement' is missing the following properties from type 'HTMLCanvasElement': height, width, captureStream, getContext, and 3 more.

51   const root = React.useRef<ReconcilerRoot<HTMLElement>>(null!)
                                              ~~~~~~~~~~~

src/demos/SVGRenderer.tsx:54:50 - error TS2344: Type 'HTMLElement' does not satisfy the constraint 'Canvas'.

54     if (!root.current) root.current = createRoot<HTMLElement>(ref.current)
                                                    ~~~~~~~~~~~

src/demos/SVGRenderer.tsx:64:30 - error TS2345: Argument of type 'HTMLDivElement' is not assignable to parameter of type 'Canvas'.
  Type 'HTMLDivElement' is missing the following properties from type 'HTMLCanvasElement': height, width, captureStream, getContext, and 3 more.

64       unmountComponentAtNode(container)
                                ~~~~~~~~~

src/demos/ViewTracking.tsx:14:37 - error TS2698: Spread types may only be created from object types.

14     <group ref={ref} {...props} {...spread} dispose={null}>
                                       ~~~~~~

src/demos/ViewTracking.tsx:123:6 - error TS7006: Parameter 'event' implicitly has an 'any' type.

123     (event, state) => {
         ~~~~~

src/demos/ViewTracking.tsx:123:13 - error TS7006: Parameter 'state' implicitly has an 'any' type.

123     (event, state) => {
                ~~~~~

src/index.tsx:2:27 - error TS7016: Could not find a declaration file for module 'react-dom/client'. '/Users/bhouston/Coding/OpenSource/r3f-examples/node_modules/react-dom/client.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/react-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-dom/client';`

2 import * as ReactDOM from 'react-dom/client'
                            ~~~~~~~~~~~~~~~~~~
```