// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ValueAndUnit } from '../../com/openmeteo/value-and-unit.js';


export class MarineCurrent {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MarineCurrent {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMarineCurrent(bb:flatbuffers.ByteBuffer, obj?:MarineCurrent):MarineCurrent {
  return (obj || new MarineCurrent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMarineCurrent(bb:flatbuffers.ByteBuffer, obj?:MarineCurrent):MarineCurrent {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MarineCurrent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

time():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

interval():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

waveHeight(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

wavePeriod(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

waveDirection(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

windWaveHeight(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

windWavePeriod(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

windWavePeakPeriod(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

windWaveDirection(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

swellWaveHeight(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

swellWavePeriod(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

swellWavePeakPeriod(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

swellWaveDirection(obj?:ValueAndUnit):ValueAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? (obj || new ValueAndUnit()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startMarineCurrent(builder:flatbuffers.Builder) {
  builder.startObject(13);
}

static addTime(builder:flatbuffers.Builder, time:bigint) {
  builder.addFieldInt64(0, time, BigInt('0'));
}

static addInterval(builder:flatbuffers.Builder, interval:number) {
  builder.addFieldInt32(1, interval, 0);
}

static addWaveHeight(builder:flatbuffers.Builder, waveHeightOffset:flatbuffers.Offset) {
  builder.addFieldStruct(2, waveHeightOffset, 0);
}

static addWavePeriod(builder:flatbuffers.Builder, wavePeriodOffset:flatbuffers.Offset) {
  builder.addFieldStruct(3, wavePeriodOffset, 0);
}

static addWaveDirection(builder:flatbuffers.Builder, waveDirectionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(4, waveDirectionOffset, 0);
}

static addWindWaveHeight(builder:flatbuffers.Builder, windWaveHeightOffset:flatbuffers.Offset) {
  builder.addFieldStruct(5, windWaveHeightOffset, 0);
}

static addWindWavePeriod(builder:flatbuffers.Builder, windWavePeriodOffset:flatbuffers.Offset) {
  builder.addFieldStruct(6, windWavePeriodOffset, 0);
}

static addWindWavePeakPeriod(builder:flatbuffers.Builder, windWavePeakPeriodOffset:flatbuffers.Offset) {
  builder.addFieldStruct(7, windWavePeakPeriodOffset, 0);
}

static addWindWaveDirection(builder:flatbuffers.Builder, windWaveDirectionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(8, windWaveDirectionOffset, 0);
}

static addSwellWaveHeight(builder:flatbuffers.Builder, swellWaveHeightOffset:flatbuffers.Offset) {
  builder.addFieldStruct(9, swellWaveHeightOffset, 0);
}

static addSwellWavePeriod(builder:flatbuffers.Builder, swellWavePeriodOffset:flatbuffers.Offset) {
  builder.addFieldStruct(10, swellWavePeriodOffset, 0);
}

static addSwellWavePeakPeriod(builder:flatbuffers.Builder, swellWavePeakPeriodOffset:flatbuffers.Offset) {
  builder.addFieldStruct(11, swellWavePeakPeriodOffset, 0);
}

static addSwellWaveDirection(builder:flatbuffers.Builder, swellWaveDirectionOffset:flatbuffers.Offset) {
  builder.addFieldStruct(12, swellWaveDirectionOffset, 0);
}

static endMarineCurrent(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
