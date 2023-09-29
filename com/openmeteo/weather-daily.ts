// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TimeRange } from '../../com/openmeteo/time-range.js';
import { ValuesAndUnit } from '../../com/openmeteo/values-and-unit.js';


export class WeatherDaily {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):WeatherDaily {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsWeatherDaily(bb:flatbuffers.ByteBuffer, obj?:WeatherDaily):WeatherDaily {
  return (obj || new WeatherDaily()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsWeatherDaily(bb:flatbuffers.ByteBuffer, obj?:WeatherDaily):WeatherDaily {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new WeatherDaily()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

time(obj?:TimeRange):TimeRange|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TimeRange()).__init(this.bb_pos + offset, this.bb!) : null;
}

apparentTemperatureMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

apparentTemperatureMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

apparentTemperatureMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

capeMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

capeMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

capeMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

cloudcoverMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

cloudcoverMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

cloudcoverMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dewpoint2mMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dewpoint2mMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dewpoint2mMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

et0FaoEvapotranspiration(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

et0FaoEvapotranspirationSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

growingDegreeDaysBase0Limit50(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

leafWetnessProbabilityMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

precipitationHours(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

precipitationProbabilityMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

precipitationProbabilityMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

precipitationProbabilityMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

precipitationSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureMslMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureMslMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureMslMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

rainSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

relativeHumidity2mMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 56);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

relativeHumidity2mMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 58);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

relativeHumidity2mMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 60);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

shortwaveRadiationSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 62);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

showersSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 64);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

snowfallSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 66);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

snowfallWaterEquivalentSum(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 68);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture0To100cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 70);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture0To10cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 72);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture0To7cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 74);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture28To100cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 76);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture7To28cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 78);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoistureIndex0To100cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 80);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoistureIndex0To7cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 82);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoistureIndex100To255cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 84);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoistureIndex28To100cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 86);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoistureIndex7To28cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 88);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature0To100cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 90);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature0To7cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 92);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature28To100cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 94);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature7To28cmMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 96);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

sunrise(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 98);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

sunriseLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 98);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

sunset(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 100);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

sunsetLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 100);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

surfacePressureMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 102);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

surfacePressureMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 104);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

surfacePressureMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 106);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature2mMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 108);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature2mMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 110);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature2mMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 112);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

updraftMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 114);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

uvIndexClearSkyMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 116);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

uvIndexMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 118);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

vaporPressureDeficitMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 120);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

visibilityMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 122);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

visibilityMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 124);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

visibilityMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 126);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

weathercode(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 128);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

winddirection10mDominant(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 130);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windgusts10mMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 132);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windgusts10mMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 134);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windgusts10mMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 136);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windspeed10mMax(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 138);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windspeed10mMean(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 140);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windspeed10mMin(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 142);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startWeatherDaily(builder:flatbuffers.Builder) {
  builder.startObject(70);
}

static addTime(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, timeOffset, 0);
}

static addApparentTemperatureMax(builder:flatbuffers.Builder, apparentTemperatureMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, apparentTemperatureMaxOffset, 0);
}

static addApparentTemperatureMean(builder:flatbuffers.Builder, apparentTemperatureMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, apparentTemperatureMeanOffset, 0);
}

static addApparentTemperatureMin(builder:flatbuffers.Builder, apparentTemperatureMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, apparentTemperatureMinOffset, 0);
}

static addCapeMax(builder:flatbuffers.Builder, capeMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, capeMaxOffset, 0);
}

static addCapeMean(builder:flatbuffers.Builder, capeMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, capeMeanOffset, 0);
}

static addCapeMin(builder:flatbuffers.Builder, capeMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, capeMinOffset, 0);
}

static addCloudcoverMax(builder:flatbuffers.Builder, cloudcoverMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, cloudcoverMaxOffset, 0);
}

static addCloudcoverMean(builder:flatbuffers.Builder, cloudcoverMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, cloudcoverMeanOffset, 0);
}

static addCloudcoverMin(builder:flatbuffers.Builder, cloudcoverMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, cloudcoverMinOffset, 0);
}

static addDewpoint2mMax(builder:flatbuffers.Builder, dewpoint2mMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, dewpoint2mMaxOffset, 0);
}

static addDewpoint2mMean(builder:flatbuffers.Builder, dewpoint2mMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, dewpoint2mMeanOffset, 0);
}

static addDewpoint2mMin(builder:flatbuffers.Builder, dewpoint2mMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, dewpoint2mMinOffset, 0);
}

static addEt0FaoEvapotranspiration(builder:flatbuffers.Builder, et0FaoEvapotranspirationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, et0FaoEvapotranspirationOffset, 0);
}

static addEt0FaoEvapotranspirationSum(builder:flatbuffers.Builder, et0FaoEvapotranspirationSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, et0FaoEvapotranspirationSumOffset, 0);
}

static addGrowingDegreeDaysBase0Limit50(builder:flatbuffers.Builder, growingDegreeDaysBase0Limit50Offset:flatbuffers.Offset) {
  builder.addFieldOffset(15, growingDegreeDaysBase0Limit50Offset, 0);
}

static addLeafWetnessProbabilityMean(builder:flatbuffers.Builder, leafWetnessProbabilityMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, leafWetnessProbabilityMeanOffset, 0);
}

static addPrecipitationHours(builder:flatbuffers.Builder, precipitationHoursOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, precipitationHoursOffset, 0);
}

static addPrecipitationProbabilityMax(builder:flatbuffers.Builder, precipitationProbabilityMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, precipitationProbabilityMaxOffset, 0);
}

static addPrecipitationProbabilityMean(builder:flatbuffers.Builder, precipitationProbabilityMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(19, precipitationProbabilityMeanOffset, 0);
}

static addPrecipitationProbabilityMin(builder:flatbuffers.Builder, precipitationProbabilityMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(20, precipitationProbabilityMinOffset, 0);
}

static addPrecipitationSum(builder:flatbuffers.Builder, precipitationSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(21, precipitationSumOffset, 0);
}

static addPressureMslMax(builder:flatbuffers.Builder, pressureMslMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(22, pressureMslMaxOffset, 0);
}

static addPressureMslMean(builder:flatbuffers.Builder, pressureMslMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(23, pressureMslMeanOffset, 0);
}

static addPressureMslMin(builder:flatbuffers.Builder, pressureMslMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(24, pressureMslMinOffset, 0);
}

static addRainSum(builder:flatbuffers.Builder, rainSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(25, rainSumOffset, 0);
}

static addRelativeHumidity2mMax(builder:flatbuffers.Builder, relativeHumidity2mMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(26, relativeHumidity2mMaxOffset, 0);
}

static addRelativeHumidity2mMean(builder:flatbuffers.Builder, relativeHumidity2mMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(27, relativeHumidity2mMeanOffset, 0);
}

static addRelativeHumidity2mMin(builder:flatbuffers.Builder, relativeHumidity2mMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(28, relativeHumidity2mMinOffset, 0);
}

static addShortwaveRadiationSum(builder:flatbuffers.Builder, shortwaveRadiationSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(29, shortwaveRadiationSumOffset, 0);
}

static addShowersSum(builder:flatbuffers.Builder, showersSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(30, showersSumOffset, 0);
}

static addSnowfallSum(builder:flatbuffers.Builder, snowfallSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(31, snowfallSumOffset, 0);
}

static addSnowfallWaterEquivalentSum(builder:flatbuffers.Builder, snowfallWaterEquivalentSumOffset:flatbuffers.Offset) {
  builder.addFieldOffset(32, snowfallWaterEquivalentSumOffset, 0);
}

static addSoilMoisture0To100cmMean(builder:flatbuffers.Builder, soilMoisture0To100cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(33, soilMoisture0To100cmMeanOffset, 0);
}

static addSoilMoisture0To10cmMean(builder:flatbuffers.Builder, soilMoisture0To10cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(34, soilMoisture0To10cmMeanOffset, 0);
}

static addSoilMoisture0To7cmMean(builder:flatbuffers.Builder, soilMoisture0To7cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(35, soilMoisture0To7cmMeanOffset, 0);
}

static addSoilMoisture28To100cmMean(builder:flatbuffers.Builder, soilMoisture28To100cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(36, soilMoisture28To100cmMeanOffset, 0);
}

static addSoilMoisture7To28cmMean(builder:flatbuffers.Builder, soilMoisture7To28cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(37, soilMoisture7To28cmMeanOffset, 0);
}

static addSoilMoistureIndex0To100cmMean(builder:flatbuffers.Builder, soilMoistureIndex0To100cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(38, soilMoistureIndex0To100cmMeanOffset, 0);
}

static addSoilMoistureIndex0To7cmMean(builder:flatbuffers.Builder, soilMoistureIndex0To7cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(39, soilMoistureIndex0To7cmMeanOffset, 0);
}

static addSoilMoistureIndex100To255cmMean(builder:flatbuffers.Builder, soilMoistureIndex100To255cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(40, soilMoistureIndex100To255cmMeanOffset, 0);
}

static addSoilMoistureIndex28To100cmMean(builder:flatbuffers.Builder, soilMoistureIndex28To100cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(41, soilMoistureIndex28To100cmMeanOffset, 0);
}

static addSoilMoistureIndex7To28cmMean(builder:flatbuffers.Builder, soilMoistureIndex7To28cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(42, soilMoistureIndex7To28cmMeanOffset, 0);
}

static addSoilTemperature0To100cmMean(builder:flatbuffers.Builder, soilTemperature0To100cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(43, soilTemperature0To100cmMeanOffset, 0);
}

static addSoilTemperature0To7cmMean(builder:flatbuffers.Builder, soilTemperature0To7cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(44, soilTemperature0To7cmMeanOffset, 0);
}

static addSoilTemperature28To100cmMean(builder:flatbuffers.Builder, soilTemperature28To100cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(45, soilTemperature28To100cmMeanOffset, 0);
}

static addSoilTemperature7To28cmMean(builder:flatbuffers.Builder, soilTemperature7To28cmMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(46, soilTemperature7To28cmMeanOffset, 0);
}

static addSunrise(builder:flatbuffers.Builder, sunriseOffset:flatbuffers.Offset) {
  builder.addFieldOffset(47, sunriseOffset, 0);
}

static createSunriseVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startSunriseVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addSunset(builder:flatbuffers.Builder, sunsetOffset:flatbuffers.Offset) {
  builder.addFieldOffset(48, sunsetOffset, 0);
}

static createSunsetVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startSunsetVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addSurfacePressureMax(builder:flatbuffers.Builder, surfacePressureMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(49, surfacePressureMaxOffset, 0);
}

static addSurfacePressureMean(builder:flatbuffers.Builder, surfacePressureMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(50, surfacePressureMeanOffset, 0);
}

static addSurfacePressureMin(builder:flatbuffers.Builder, surfacePressureMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(51, surfacePressureMinOffset, 0);
}

static addTemperature2mMax(builder:flatbuffers.Builder, temperature2mMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(52, temperature2mMaxOffset, 0);
}

static addTemperature2mMean(builder:flatbuffers.Builder, temperature2mMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(53, temperature2mMeanOffset, 0);
}

static addTemperature2mMin(builder:flatbuffers.Builder, temperature2mMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(54, temperature2mMinOffset, 0);
}

static addUpdraftMax(builder:flatbuffers.Builder, updraftMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(55, updraftMaxOffset, 0);
}

static addUvIndexClearSkyMax(builder:flatbuffers.Builder, uvIndexClearSkyMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(56, uvIndexClearSkyMaxOffset, 0);
}

static addUvIndexMax(builder:flatbuffers.Builder, uvIndexMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(57, uvIndexMaxOffset, 0);
}

static addVaporPressureDeficitMax(builder:flatbuffers.Builder, vaporPressureDeficitMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(58, vaporPressureDeficitMaxOffset, 0);
}

static addVisibilityMax(builder:flatbuffers.Builder, visibilityMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(59, visibilityMaxOffset, 0);
}

static addVisibilityMean(builder:flatbuffers.Builder, visibilityMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(60, visibilityMeanOffset, 0);
}

static addVisibilityMin(builder:flatbuffers.Builder, visibilityMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(61, visibilityMinOffset, 0);
}

static addWeathercode(builder:flatbuffers.Builder, weathercodeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(62, weathercodeOffset, 0);
}

static addWinddirection10mDominant(builder:flatbuffers.Builder, winddirection10mDominantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(63, winddirection10mDominantOffset, 0);
}

static addWindgusts10mMax(builder:flatbuffers.Builder, windgusts10mMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(64, windgusts10mMaxOffset, 0);
}

static addWindgusts10mMean(builder:flatbuffers.Builder, windgusts10mMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(65, windgusts10mMeanOffset, 0);
}

static addWindgusts10mMin(builder:flatbuffers.Builder, windgusts10mMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(66, windgusts10mMinOffset, 0);
}

static addWindspeed10mMax(builder:flatbuffers.Builder, windspeed10mMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(67, windspeed10mMaxOffset, 0);
}

static addWindspeed10mMean(builder:flatbuffers.Builder, windspeed10mMeanOffset:flatbuffers.Offset) {
  builder.addFieldOffset(68, windspeed10mMeanOffset, 0);
}

static addWindspeed10mMin(builder:flatbuffers.Builder, windspeed10mMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(69, windspeed10mMinOffset, 0);
}

static endWeatherDaily(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // time
  return offset;
}

}
