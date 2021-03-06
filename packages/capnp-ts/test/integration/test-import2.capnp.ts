/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from "capnp-ts";
import { ObjectSize as __O, Struct as __S, Interface as __I } from 'capnp-ts';
import { Node, Field, Enumerant, Superclass, Method, Type, Brand, Value, Annotation } from "capnp-ts/lib/std/schema.capnp";
import { TestImport } from "./test-import.capnp";
import { TestAllTypes } from "./test.capnp";
export const _capnpFileId = "c64a3bf0338a124a";
export class TestImport2 extends __S {
    static readonly _capnp = { displayName: "TestImport2", id: "f6bd77f100ecb0ff", size: new __O(0, 3) };
    adoptFoo(value: capnp.Orphan<TestAllTypes>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownFoo(): capnp.Orphan<TestAllTypes> { return __S.disown(this.getFoo()); }
    getFoo(): TestAllTypes { return __S.getStruct(0, TestAllTypes, this); }
    hasFoo(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    initFoo(): TestAllTypes { return __S.initStructAt(0, TestAllTypes, this); }
    setFoo(value: TestAllTypes): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    adoptBar(value: capnp.Orphan<Node>): void { __S.adopt(value, __S.getPointer(1, this)); }
    disownBar(): capnp.Orphan<Node> { return __S.disown(this.getBar()); }
    getBar(): Node { return __S.getStruct(1, Node, this); }
    hasBar(): boolean { return !__S.isNull(__S.getPointer(1, this)); }
    initBar(): Node { return __S.initStructAt(1, Node, this); }
    setBar(value: Node): void { __S.copyFrom(value, __S.getPointer(1, this)); }
    adoptBaz(value: capnp.Orphan<TestImport>): void { __S.adopt(value, __S.getPointer(2, this)); }
    disownBaz(): capnp.Orphan<TestImport> { return __S.disown(this.getBaz()); }
    getBaz(): TestImport { return __S.getStruct(2, TestImport, this); }
    hasBaz(): boolean { return !__S.isNull(__S.getPointer(2, this)); }
    initBaz(): TestImport { return __S.initStructAt(2, TestImport, this); }
    setBaz(value: TestImport): void { __S.copyFrom(value, __S.getPointer(2, this)); }
    toString(): string { return "TestImport2_" + super.toString(); }
}
