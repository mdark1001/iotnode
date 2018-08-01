'use strict'

const test = require('ava')
const proxyquire = require('proxyquire');
const sinon = require('sinon');
let db = null
let MetricStub={
  belongsTo:sinon.spy()
}
let AgentStub =null
let sandbox = null
let config = {
 logging:function () {

 }
}
test.beforeEach(async () => {
  sandbox =sinon.createSandbox()
  AgentStub={
    hasMany: sandbox.spy()
  }

  const setupDatabase = proxyquire('../',{
    './models/agent':()=>AgentStub,
    './models/metric':()=>MetricStub
  })
  db = await setupDatabase(config)
})
test.afterEach(() =>{
  sandbox && sinon.createSandbox()
})

test('Agent', t => {
  t.truthy(db.Agent, 'Agent service should exists')
})
test.serial('Setup',t=>{
  t.true(AgentStub.hasMany.called,'Se llamo HasMany de Agent')
  t.true(AgentStub.hasMany.calledWith(MetricStub),'Se llamo HasMany de Agent con la metrica')
  t.true(MetricStub.belongsTo.called,'Se llamo belongsTo de Metric')
  t.true(MetricStub.belongsTo.calledWith(AgentStub),'Se llamo belongsTo de Metric on el agente')
})
