/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Person = (function() {
    
        /**
         * Properties of a Person.
         * @exports IPerson
         * @interface IPerson
         * @property {number|Long|null} [id] Person id
         * @property {string|null} [name] Person name
         * @property {number|null} [age] Person age
         */
    
        /**
         * Constructs a new Person.
         * @exports Person
         * @classdesc Represents a Person.
         * @implements IPerson
         * @constructor
         * @param {IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Person id.
         * @member {number|Long} id
         * @memberof Person
         * @instance
         */
        Person.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Person name.
         * @member {string} name
         * @memberof Person
         * @instance
         */
        Person.prototype.name = "";
    
        /**
         * Person age.
         * @member {number} age
         * @memberof Person
         * @instance
         */
        Person.prototype.age = 0;
    
        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof Person
         * @static
         * @param {IPerson=} [properties] Properties to set
         * @returns {Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };
    
        /**
         * Encodes the specified Person message. Does not implicitly {@link Person.verify|verify} messages.
         * @function encode
         * @memberof Person
         * @static
         * @param {IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.age);
            return writer;
        };
    
        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Person
         * @static
         * @param {IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Person();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.age = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Person message.
         * @function verify
         * @memberof Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            return null;
        };
    
        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Person
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Person} Person
         */
        Person.fromObject = function fromObject(object) {
            if (object instanceof $root.Person)
                return object;
            var message = new $root.Person();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Person
         * @static
         * @param {Person} message Person
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Person.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.name = "";
                object.age = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            return object;
        };
    
        /**
         * Converts this Person to JSON.
         * @function toJSON
         * @memberof Person
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Person.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Person;
    })();
    
    $root.People = (function() {
    
        /**
         * Properties of a People.
         * @exports IPeople
         * @interface IPeople
         * @property {Array.<IPerson>|null} [person] People person
         */
    
        /**
         * Constructs a new People.
         * @exports People
         * @classdesc Represents a People.
         * @implements IPeople
         * @constructor
         * @param {IPeople=} [properties] Properties to set
         */
        function People(properties) {
            this.person = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * People person.
         * @member {Array.<IPerson>} person
         * @memberof People
         * @instance
         */
        People.prototype.person = $util.emptyArray;
    
        /**
         * Creates a new People instance using the specified properties.
         * @function create
         * @memberof People
         * @static
         * @param {IPeople=} [properties] Properties to set
         * @returns {People} People instance
         */
        People.create = function create(properties) {
            return new People(properties);
        };
    
        /**
         * Encodes the specified People message. Does not implicitly {@link People.verify|verify} messages.
         * @function encode
         * @memberof People
         * @static
         * @param {IPeople} message People message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        People.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.person != null && message.person.length)
                for (var i = 0; i < message.person.length; ++i)
                    $root.Person.encode(message.person[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified People message, length delimited. Does not implicitly {@link People.verify|verify} messages.
         * @function encodeDelimited
         * @memberof People
         * @static
         * @param {IPeople} message People message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        People.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a People message from the specified reader or buffer.
         * @function decode
         * @memberof People
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {People} People
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        People.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.People();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.person && message.person.length))
                        message.person = [];
                    message.person.push($root.Person.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a People message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof People
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {People} People
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        People.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a People message.
         * @function verify
         * @memberof People
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        People.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.person != null && message.hasOwnProperty("person")) {
                if (!Array.isArray(message.person))
                    return "person: array expected";
                for (var i = 0; i < message.person.length; ++i) {
                    var error = $root.Person.verify(message.person[i]);
                    if (error)
                        return "person." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a People message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof People
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {People} People
         */
        People.fromObject = function fromObject(object) {
            if (object instanceof $root.People)
                return object;
            var message = new $root.People();
            if (object.person) {
                if (!Array.isArray(object.person))
                    throw TypeError(".People.person: array expected");
                message.person = [];
                for (var i = 0; i < object.person.length; ++i) {
                    if (typeof object.person[i] !== "object")
                        throw TypeError(".People.person: object expected");
                    message.person[i] = $root.Person.fromObject(object.person[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a People message. Also converts values to other types if specified.
         * @function toObject
         * @memberof People
         * @static
         * @param {People} message People
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        People.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.person = [];
            if (message.person && message.person.length) {
                object.person = [];
                for (var j = 0; j < message.person.length; ++j)
                    object.person[j] = $root.Person.toObject(message.person[j], options);
            }
            return object;
        };
    
        /**
         * Converts this People to JSON.
         * @function toJSON
         * @memberof People
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        People.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return People;
    })();

    return $root;
});
