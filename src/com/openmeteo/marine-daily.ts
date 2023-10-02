// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TimeRange } from '../../com/openmeteo/time-range.js';
import { ValuesAndUnit } from '../../com/openmeteo/values-and-unit.js';


export class MarineDaily {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MarineDaily {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMarineDaily(bb:flatbuffers.ByteBuffer, obj?:MarineDaily):MarineDaily {
  return (obj || new MarineDaily()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMarineDaily(bb:flatbuffers.ByteBuffer, obj?:MarineDaily):MarineDaily {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MarineDaily()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

time(obj?:TimeRange):TimeRange|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TimeRange()).__init(this.bb_pos + offset, this.bb!) : null;
}

waveHeightMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windWaveHeightMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

swellWaveHeightMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

waveDirectionDominant(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windWaveDirectionDominant(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

swellWaveDirectionDominant(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

wavePeriodMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windWavePeriodMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windWavePeakPeriodMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

swellWavePeriodMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

swellWavePeakPeriodMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startMarineDaily(builder:flatbuffers.Builder) {
  builder.startObject(12);
}

static addTime(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, timeOffset, 0);
}

static addWaveHeightMax(builder:flatbuffers.Builder, waveHeightMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, waveHeightMaxOffset, 0);
}

static addWindWaveHeightMax(builder:flatbuffers.Builder, windWaveHeightMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, windWaveHeightMaxOffset, 0);
}

static addSwellWaveHeightMax(builder:flatbuffers.Builder, swellWaveHeightMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, swellWaveHeightMaxOffset, 0);
}

static addWaveDirectionDominant(builder:flatbuffers.Builder, waveDirectionDominantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, waveDirectionDominantOffset, 0);
}

static addWindWaveDirectionDominant(builder:flatbuffers.Builder, windWaveDirectionDominantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, windWaveDirectionDominantOffset, 0);
}

static addSwellWaveDirectionDominant(builder:flatbuffers.Builder, swellWaveDirectionDominantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, swellWaveDirectionDominantOffset, 0);
}

static addWavePeriodMax(builder:flatbuffers.Builder, wavePeriodMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, wavePeriodMaxOffset, 0);
}

static addWindWavePeriodMax(builder:flatbuffers.Builder, windWavePeriodMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, windWavePeriodMaxOffset, 0);
}

static addWindWavePeakPeriodMax(builder:flatbuffers.Builder, windWavePeakPeriodMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, windWavePeakPeriodMaxOffset, 0);
}

static addSwellWavePeriodMax(builder:flatbuffers.Builder, swellWavePeriodMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, swellWavePeriodMaxOffset, 0);
}

static addSwellWavePeakPeriodMax(builder:flatbuffers.Builder, swellWavePeakPeriodMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, swellWavePeakPeriodMaxOffset, 0);
}

static endMarineDaily(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // time
  return offset;
}

}