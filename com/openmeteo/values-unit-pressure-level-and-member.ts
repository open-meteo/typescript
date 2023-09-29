// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { SiUnit } from '../../com/openmeteo/si-unit.js';
import { ValuesAndLevelAndMember } from '../../com/openmeteo/values-and-level-and-member.js';


export class ValuesUnitPressureLevelAndMember {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ValuesUnitPressureLevelAndMember {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsValuesUnitPressureLevelAndMember(bb:flatbuffers.ByteBuffer, obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember {
  return (obj || new ValuesUnitPressureLevelAndMember()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsValuesUnitPressureLevelAndMember(bb:flatbuffers.ByteBuffer, obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ValuesUnitPressureLevelAndMember()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

unit():SiUnit {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : SiUnit.undefined;
}

values(index: number, obj?:ValuesAndLevelAndMember):ValuesAndLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ValuesAndLevelAndMember()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

valuesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startValuesUnitPressureLevelAndMember(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addUnit(builder:flatbuffers.Builder, unit:SiUnit) {
  builder.addFieldInt8(0, unit, SiUnit.undefined);
}

static addValues(builder:flatbuffers.Builder, valuesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, valuesOffset, 0);
}

static createValuesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startValuesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endValuesUnitPressureLevelAndMember(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createValuesUnitPressureLevelAndMember(builder:flatbuffers.Builder, unit:SiUnit, valuesOffset:flatbuffers.Offset):flatbuffers.Offset {
  ValuesUnitPressureLevelAndMember.startValuesUnitPressureLevelAndMember(builder);
  ValuesUnitPressureLevelAndMember.addUnit(builder, unit);
  ValuesUnitPressureLevelAndMember.addValues(builder, valuesOffset);
  return ValuesUnitPressureLevelAndMember.endValuesUnitPressureLevelAndMember(builder);
}
}
