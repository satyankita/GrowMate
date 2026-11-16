
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model ClassroomMember
 * 
 */
export type ClassroomMember = $Result.DefaultSelection<Prisma.$ClassroomMemberPayload>
/**
 * Model ClassroomJoinRequest
 * 
 */
export type ClassroomJoinRequest = $Result.DefaultSelection<Prisma.$ClassroomJoinRequestPayload>
/**
 * Model DailyGoal
 * 
 */
export type DailyGoal = $Result.DefaultSelection<Prisma.$DailyGoalPayload>
/**
 * Model DailyGoalTask
 * 
 */
export type DailyGoalTask = $Result.DefaultSelection<Prisma.$DailyGoalTaskPayload>
/**
 * Model DailyReflection
 * 
 */
export type DailyReflection = $Result.DefaultSelection<Prisma.$DailyReflectionPayload>
/**
 * Model ClassroomNotification
 * 
 */
export type ClassroomNotification = $Result.DefaultSelection<Prisma.$ClassroomNotificationPayload>
/**
 * Model ClassroomNotificationRead
 * 
 */
export type ClassroomNotificationRead = $Result.DefaultSelection<Prisma.$ClassroomNotificationReadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MemberRole: {
  HOST: 'HOST',
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  PARTICIPANT: 'PARTICIPANT'
};

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole]


export const JoinRequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type JoinRequestStatus = (typeof JoinRequestStatus)[keyof typeof JoinRequestStatus]

}

export type MemberRole = $Enums.MemberRole

export const MemberRole: typeof $Enums.MemberRole

export type JoinRequestStatus = $Enums.JoinRequestStatus

export const JoinRequestStatus: typeof $Enums.JoinRequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomMember`: Exposes CRUD operations for the **ClassroomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomMembers
    * const classroomMembers = await prisma.classroomMember.findMany()
    * ```
    */
  get classroomMember(): Prisma.ClassroomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomJoinRequest`: Exposes CRUD operations for the **ClassroomJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomJoinRequests
    * const classroomJoinRequests = await prisma.classroomJoinRequest.findMany()
    * ```
    */
  get classroomJoinRequest(): Prisma.ClassroomJoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyGoal`: Exposes CRUD operations for the **DailyGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyGoals
    * const dailyGoals = await prisma.dailyGoal.findMany()
    * ```
    */
  get dailyGoal(): Prisma.DailyGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyGoalTask`: Exposes CRUD operations for the **DailyGoalTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyGoalTasks
    * const dailyGoalTasks = await prisma.dailyGoalTask.findMany()
    * ```
    */
  get dailyGoalTask(): Prisma.DailyGoalTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyReflection`: Exposes CRUD operations for the **DailyReflection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReflections
    * const dailyReflections = await prisma.dailyReflection.findMany()
    * ```
    */
  get dailyReflection(): Prisma.DailyReflectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomNotification`: Exposes CRUD operations for the **ClassroomNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomNotifications
    * const classroomNotifications = await prisma.classroomNotification.findMany()
    * ```
    */
  get classroomNotification(): Prisma.ClassroomNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomNotificationRead`: Exposes CRUD operations for the **ClassroomNotificationRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomNotificationReads
    * const classroomNotificationReads = await prisma.classroomNotificationRead.findMany()
    * ```
    */
  get classroomNotificationRead(): Prisma.ClassroomNotificationReadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Classroom: 'Classroom',
    ClassroomMember: 'ClassroomMember',
    ClassroomJoinRequest: 'ClassroomJoinRequest',
    DailyGoal: 'DailyGoal',
    DailyGoalTask: 'DailyGoalTask',
    DailyReflection: 'DailyReflection',
    ClassroomNotification: 'ClassroomNotification',
    ClassroomNotificationRead: 'ClassroomNotificationRead'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "classroom" | "classroomMember" | "classroomJoinRequest" | "dailyGoal" | "dailyGoalTask" | "dailyReflection" | "classroomNotification" | "classroomNotificationRead"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      ClassroomMember: {
        payload: Prisma.$ClassroomMemberPayload<ExtArgs>
        fields: Prisma.ClassroomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>
          }
          findFirst: {
            args: Prisma.ClassroomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>
          }
          findMany: {
            args: Prisma.ClassroomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>[]
          }
          create: {
            args: Prisma.ClassroomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>
          }
          createMany: {
            args: Prisma.ClassroomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>[]
          }
          delete: {
            args: Prisma.ClassroomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>
          }
          update: {
            args: Prisma.ClassroomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMemberPayload>
          }
          aggregate: {
            args: Prisma.ClassroomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomMember>
          }
          groupBy: {
            args: Prisma.ClassroomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomMemberCountAggregateOutputType> | number
          }
        }
      }
      ClassroomJoinRequest: {
        payload: Prisma.$ClassroomJoinRequestPayload<ExtArgs>
        fields: Prisma.ClassroomJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.ClassroomJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>
          }
          findMany: {
            args: Prisma.ClassroomJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>[]
          }
          create: {
            args: Prisma.ClassroomJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>
          }
          createMany: {
            args: Prisma.ClassroomJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomJoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>[]
          }
          delete: {
            args: Prisma.ClassroomJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>
          }
          update: {
            args: Prisma.ClassroomJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomJoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.ClassroomJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomJoinRequest>
          }
          groupBy: {
            args: Prisma.ClassroomJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomJoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      DailyGoal: {
        payload: Prisma.$DailyGoalPayload<ExtArgs>
        fields: Prisma.DailyGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          findFirst: {
            args: Prisma.DailyGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          findMany: {
            args: Prisma.DailyGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>[]
          }
          create: {
            args: Prisma.DailyGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          createMany: {
            args: Prisma.DailyGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>[]
          }
          delete: {
            args: Prisma.DailyGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          update: {
            args: Prisma.DailyGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          deleteMany: {
            args: Prisma.DailyGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>[]
          }
          upsert: {
            args: Prisma.DailyGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          aggregate: {
            args: Prisma.DailyGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyGoal>
          }
          groupBy: {
            args: Prisma.DailyGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyGoalCountArgs<ExtArgs>
            result: $Utils.Optional<DailyGoalCountAggregateOutputType> | number
          }
        }
      }
      DailyGoalTask: {
        payload: Prisma.$DailyGoalTaskPayload<ExtArgs>
        fields: Prisma.DailyGoalTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyGoalTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyGoalTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>
          }
          findFirst: {
            args: Prisma.DailyGoalTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyGoalTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>
          }
          findMany: {
            args: Prisma.DailyGoalTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>[]
          }
          create: {
            args: Prisma.DailyGoalTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>
          }
          createMany: {
            args: Prisma.DailyGoalTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyGoalTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>[]
          }
          delete: {
            args: Prisma.DailyGoalTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>
          }
          update: {
            args: Prisma.DailyGoalTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>
          }
          deleteMany: {
            args: Prisma.DailyGoalTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyGoalTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyGoalTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>[]
          }
          upsert: {
            args: Prisma.DailyGoalTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalTaskPayload>
          }
          aggregate: {
            args: Prisma.DailyGoalTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyGoalTask>
          }
          groupBy: {
            args: Prisma.DailyGoalTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyGoalTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyGoalTaskCountArgs<ExtArgs>
            result: $Utils.Optional<DailyGoalTaskCountAggregateOutputType> | number
          }
        }
      }
      DailyReflection: {
        payload: Prisma.$DailyReflectionPayload<ExtArgs>
        fields: Prisma.DailyReflectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReflectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReflectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>
          }
          findFirst: {
            args: Prisma.DailyReflectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReflectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>
          }
          findMany: {
            args: Prisma.DailyReflectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>[]
          }
          create: {
            args: Prisma.DailyReflectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>
          }
          createMany: {
            args: Prisma.DailyReflectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReflectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>[]
          }
          delete: {
            args: Prisma.DailyReflectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>
          }
          update: {
            args: Prisma.DailyReflectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>
          }
          deleteMany: {
            args: Prisma.DailyReflectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReflectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyReflectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>[]
          }
          upsert: {
            args: Prisma.DailyReflectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReflectionPayload>
          }
          aggregate: {
            args: Prisma.DailyReflectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReflection>
          }
          groupBy: {
            args: Prisma.DailyReflectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReflectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReflectionCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReflectionCountAggregateOutputType> | number
          }
        }
      }
      ClassroomNotification: {
        payload: Prisma.$ClassroomNotificationPayload<ExtArgs>
        fields: Prisma.ClassroomNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>
          }
          findFirst: {
            args: Prisma.ClassroomNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>
          }
          findMany: {
            args: Prisma.ClassroomNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>[]
          }
          create: {
            args: Prisma.ClassroomNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>
          }
          createMany: {
            args: Prisma.ClassroomNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>[]
          }
          delete: {
            args: Prisma.ClassroomNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>
          }
          update: {
            args: Prisma.ClassroomNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationPayload>
          }
          aggregate: {
            args: Prisma.ClassroomNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomNotification>
          }
          groupBy: {
            args: Prisma.ClassroomNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomNotificationCountAggregateOutputType> | number
          }
        }
      }
      ClassroomNotificationRead: {
        payload: Prisma.$ClassroomNotificationReadPayload<ExtArgs>
        fields: Prisma.ClassroomNotificationReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomNotificationReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomNotificationReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>
          }
          findFirst: {
            args: Prisma.ClassroomNotificationReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomNotificationReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>
          }
          findMany: {
            args: Prisma.ClassroomNotificationReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>[]
          }
          create: {
            args: Prisma.ClassroomNotificationReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>
          }
          createMany: {
            args: Prisma.ClassroomNotificationReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomNotificationReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>[]
          }
          delete: {
            args: Prisma.ClassroomNotificationReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>
          }
          update: {
            args: Prisma.ClassroomNotificationReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomNotificationReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomNotificationReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomNotificationReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomNotificationReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomNotificationReadPayload>
          }
          aggregate: {
            args: Prisma.ClassroomNotificationReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomNotificationRead>
          }
          groupBy: {
            args: Prisma.ClassroomNotificationReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomNotificationReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomNotificationReadCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomNotificationReadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    classroom?: ClassroomOmit
    classroomMember?: ClassroomMemberOmit
    classroomJoinRequest?: ClassroomJoinRequestOmit
    dailyGoal?: DailyGoalOmit
    dailyGoalTask?: DailyGoalTaskOmit
    dailyReflection?: DailyReflectionOmit
    classroomNotification?: ClassroomNotificationOmit
    classroomNotificationRead?: ClassroomNotificationReadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hostedClassrooms: number
    memberships: number
    classroomJoinRequests: number
    dailyGoals: number
    dailyReflections: number
    notificationsCreated: number
    notificationReads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostedClassrooms?: boolean | UserCountOutputTypeCountHostedClassroomsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    classroomJoinRequests?: boolean | UserCountOutputTypeCountClassroomJoinRequestsArgs
    dailyGoals?: boolean | UserCountOutputTypeCountDailyGoalsArgs
    dailyReflections?: boolean | UserCountOutputTypeCountDailyReflectionsArgs
    notificationsCreated?: boolean | UserCountOutputTypeCountNotificationsCreatedArgs
    notificationReads?: boolean | UserCountOutputTypeCountNotificationReadsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostedClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassroomJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomJoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyGoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReflectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomNotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomNotificationReadWhereInput
  }


  /**
   * Count Type ClassroomCountOutputType
   */

  export type ClassroomCountOutputType = {
    members: number
    joinRequests: number
    dailyGoals: number
    dailyReflections: number
    notifications: number
  }

  export type ClassroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ClassroomCountOutputTypeCountMembersArgs
    joinRequests?: boolean | ClassroomCountOutputTypeCountJoinRequestsArgs
    dailyGoals?: boolean | ClassroomCountOutputTypeCountDailyGoalsArgs
    dailyReflections?: boolean | ClassroomCountOutputTypeCountDailyReflectionsArgs
    notifications?: boolean | ClassroomCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomCountOutputType
     */
    select?: ClassroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomMemberWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomJoinRequestWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountDailyGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyGoalWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountDailyReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReflectionWhereInput
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomNotificationWhereInput
  }


  /**
   * Count Type DailyGoalCountOutputType
   */

  export type DailyGoalCountOutputType = {
    tasks: number
  }

  export type DailyGoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | DailyGoalCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * DailyGoalCountOutputType without action
   */
  export type DailyGoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalCountOutputType
     */
    select?: DailyGoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyGoalCountOutputType without action
   */
  export type DailyGoalCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyGoalTaskWhereInput
  }


  /**
   * Count Type ClassroomNotificationCountOutputType
   */

  export type ClassroomNotificationCountOutputType = {
    reads: number
  }

  export type ClassroomNotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reads?: boolean | ClassroomNotificationCountOutputTypeCountReadsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomNotificationCountOutputType without action
   */
  export type ClassroomNotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationCountOutputType
     */
    select?: ClassroomNotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomNotificationCountOutputType without action
   */
  export type ClassroomNotificationCountOutputTypeCountReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomNotificationReadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    passwordHash: string | null
    name: string | null
    email: string | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    passwordHash: string | null
    name: string | null
    email: string | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleId: number
    passwordHash: number
    name: number
    email: number
    picture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    googleId?: true
    passwordHash?: true
    name?: true
    email?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleId?: true
    passwordHash?: true
    name?: true
    email?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleId?: true
    passwordHash?: true
    name?: true
    email?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleId: string | null
    passwordHash: string | null
    name: string
    email: string
    picture: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    passwordHash?: boolean
    name?: boolean
    email?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostedClassrooms?: boolean | User$hostedClassroomsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    classroomJoinRequests?: boolean | User$classroomJoinRequestsArgs<ExtArgs>
    dailyGoals?: boolean | User$dailyGoalsArgs<ExtArgs>
    dailyReflections?: boolean | User$dailyReflectionsArgs<ExtArgs>
    notificationsCreated?: boolean | User$notificationsCreatedArgs<ExtArgs>
    notificationReads?: boolean | User$notificationReadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    passwordHash?: boolean
    name?: boolean
    email?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    passwordHash?: boolean
    name?: boolean
    email?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    googleId?: boolean
    passwordHash?: boolean
    name?: boolean
    email?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "passwordHash" | "name" | "email" | "picture" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostedClassrooms?: boolean | User$hostedClassroomsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    classroomJoinRequests?: boolean | User$classroomJoinRequestsArgs<ExtArgs>
    dailyGoals?: boolean | User$dailyGoalsArgs<ExtArgs>
    dailyReflections?: boolean | User$dailyReflectionsArgs<ExtArgs>
    notificationsCreated?: boolean | User$notificationsCreatedArgs<ExtArgs>
    notificationReads?: boolean | User$notificationReadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hostedClassrooms: Prisma.$ClassroomPayload<ExtArgs>[]
      memberships: Prisma.$ClassroomMemberPayload<ExtArgs>[]
      classroomJoinRequests: Prisma.$ClassroomJoinRequestPayload<ExtArgs>[]
      dailyGoals: Prisma.$DailyGoalPayload<ExtArgs>[]
      dailyReflections: Prisma.$DailyReflectionPayload<ExtArgs>[]
      notificationsCreated: Prisma.$ClassroomNotificationPayload<ExtArgs>[]
      notificationReads: Prisma.$ClassroomNotificationReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string | null
      passwordHash: string | null
      name: string
      email: string
      picture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostedClassrooms<T extends User$hostedClassroomsArgs<ExtArgs> = {}>(args?: Subset<T, User$hostedClassroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classroomJoinRequests<T extends User$classroomJoinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$classroomJoinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyGoals<T extends User$dailyGoalsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyReflections<T extends User$dailyReflectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyReflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationsCreated<T extends User$notificationsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationReads<T extends User$notificationReadsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationReadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hostedClassrooms
   */
  export type User$hostedClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    cursor?: ClassroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    where?: ClassroomMemberWhereInput
    orderBy?: ClassroomMemberOrderByWithRelationInput | ClassroomMemberOrderByWithRelationInput[]
    cursor?: ClassroomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomMemberScalarFieldEnum | ClassroomMemberScalarFieldEnum[]
  }

  /**
   * User.classroomJoinRequests
   */
  export type User$classroomJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    where?: ClassroomJoinRequestWhereInput
    orderBy?: ClassroomJoinRequestOrderByWithRelationInput | ClassroomJoinRequestOrderByWithRelationInput[]
    cursor?: ClassroomJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomJoinRequestScalarFieldEnum | ClassroomJoinRequestScalarFieldEnum[]
  }

  /**
   * User.dailyGoals
   */
  export type User$dailyGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    where?: DailyGoalWhereInput
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    cursor?: DailyGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * User.dailyReflections
   */
  export type User$dailyReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    where?: DailyReflectionWhereInput
    orderBy?: DailyReflectionOrderByWithRelationInput | DailyReflectionOrderByWithRelationInput[]
    cursor?: DailyReflectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReflectionScalarFieldEnum | DailyReflectionScalarFieldEnum[]
  }

  /**
   * User.notificationsCreated
   */
  export type User$notificationsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    where?: ClassroomNotificationWhereInput
    orderBy?: ClassroomNotificationOrderByWithRelationInput | ClassroomNotificationOrderByWithRelationInput[]
    cursor?: ClassroomNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomNotificationScalarFieldEnum | ClassroomNotificationScalarFieldEnum[]
  }

  /**
   * User.notificationReads
   */
  export type User$notificationReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    where?: ClassroomNotificationReadWhereInput
    orderBy?: ClassroomNotificationReadOrderByWithRelationInput | ClassroomNotificationReadOrderByWithRelationInput[]
    cursor?: ClassroomNotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomNotificationReadScalarFieldEnum | ClassroomNotificationReadScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomAvgAggregateOutputType = {
    tasksPerDay: number | null
  }

  export type ClassroomSumAggregateOutputType = {
    tasksPerDay: number | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    joinCode: string | null
    hostId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dailyGoal: string | null
    goalSettingTime: string | null
    reflectionTime: string | null
    tasksPerDay: number | null
    timezone: string | null
    allowLateGoalEdits: boolean | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    joinCode: string | null
    hostId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dailyGoal: string | null
    goalSettingTime: string | null
    reflectionTime: string | null
    tasksPerDay: number | null
    timezone: string | null
    allowLateGoalEdits: boolean | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    name: number
    description: number
    joinCode: number
    hostId: number
    createdAt: number
    updatedAt: number
    dailyGoal: number
    goalSettingTime: number
    reflectionTime: number
    tasksPerDay: number
    dayParts: number
    timezone: number
    allowLateGoalEdits: number
    _all: number
  }


  export type ClassroomAvgAggregateInputType = {
    tasksPerDay?: true
  }

  export type ClassroomSumAggregateInputType = {
    tasksPerDay?: true
  }

  export type ClassroomMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    joinCode?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
    dailyGoal?: true
    goalSettingTime?: true
    reflectionTime?: true
    tasksPerDay?: true
    timezone?: true
    allowLateGoalEdits?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    joinCode?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
    dailyGoal?: true
    goalSettingTime?: true
    reflectionTime?: true
    tasksPerDay?: true
    timezone?: true
    allowLateGoalEdits?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    joinCode?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
    dailyGoal?: true
    goalSettingTime?: true
    reflectionTime?: true
    tasksPerDay?: true
    dayParts?: true
    timezone?: true
    allowLateGoalEdits?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _avg?: ClassroomAvgAggregateInputType
    _sum?: ClassroomSumAggregateInputType
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: string
    name: string
    description: string | null
    joinCode: string
    hostId: string
    createdAt: Date
    updatedAt: Date
    dailyGoal: string | null
    goalSettingTime: string | null
    reflectionTime: string | null
    tasksPerDay: number
    dayParts: JsonValue | null
    timezone: string
    allowLateGoalEdits: boolean
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    joinCode?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyGoal?: boolean
    goalSettingTime?: boolean
    reflectionTime?: boolean
    tasksPerDay?: boolean
    dayParts?: boolean
    timezone?: boolean
    allowLateGoalEdits?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Classroom$membersArgs<ExtArgs>
    joinRequests?: boolean | Classroom$joinRequestsArgs<ExtArgs>
    dailyGoals?: boolean | Classroom$dailyGoalsArgs<ExtArgs>
    dailyReflections?: boolean | Classroom$dailyReflectionsArgs<ExtArgs>
    notifications?: boolean | Classroom$notificationsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    joinCode?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyGoal?: boolean
    goalSettingTime?: boolean
    reflectionTime?: boolean
    tasksPerDay?: boolean
    dayParts?: boolean
    timezone?: boolean
    allowLateGoalEdits?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    joinCode?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyGoal?: boolean
    goalSettingTime?: boolean
    reflectionTime?: boolean
    tasksPerDay?: boolean
    dayParts?: boolean
    timezone?: boolean
    allowLateGoalEdits?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    joinCode?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyGoal?: boolean
    goalSettingTime?: boolean
    reflectionTime?: boolean
    tasksPerDay?: boolean
    dayParts?: boolean
    timezone?: boolean
    allowLateGoalEdits?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "joinCode" | "hostId" | "createdAt" | "updatedAt" | "dailyGoal" | "goalSettingTime" | "reflectionTime" | "tasksPerDay" | "dayParts" | "timezone" | "allowLateGoalEdits", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Classroom$membersArgs<ExtArgs>
    joinRequests?: boolean | Classroom$joinRequestsArgs<ExtArgs>
    dailyGoals?: boolean | Classroom$dailyGoalsArgs<ExtArgs>
    dailyReflections?: boolean | Classroom$dailyReflectionsArgs<ExtArgs>
    notifications?: boolean | Classroom$notificationsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$ClassroomMemberPayload<ExtArgs>[]
      joinRequests: Prisma.$ClassroomJoinRequestPayload<ExtArgs>[]
      dailyGoals: Prisma.$DailyGoalPayload<ExtArgs>[]
      dailyReflections: Prisma.$DailyReflectionPayload<ExtArgs>[]
      notifications: Prisma.$ClassroomNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      joinCode: string
      hostId: string
      createdAt: Date
      updatedAt: Date
      dailyGoal: string | null
      goalSettingTime: string | null
      reflectionTime: string | null
      tasksPerDay: number
      dayParts: Prisma.JsonValue | null
      timezone: string
      allowLateGoalEdits: boolean
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {ClassroomCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {ClassroomUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Classroom$membersArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends Classroom$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyGoals<T extends Classroom$dailyGoalsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$dailyGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyReflections<T extends Classroom$dailyReflectionsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$dailyReflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Classroom$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classroom model
   */
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'String'>
    readonly name: FieldRef<"Classroom", 'String'>
    readonly description: FieldRef<"Classroom", 'String'>
    readonly joinCode: FieldRef<"Classroom", 'String'>
    readonly hostId: FieldRef<"Classroom", 'String'>
    readonly createdAt: FieldRef<"Classroom", 'DateTime'>
    readonly updatedAt: FieldRef<"Classroom", 'DateTime'>
    readonly dailyGoal: FieldRef<"Classroom", 'String'>
    readonly goalSettingTime: FieldRef<"Classroom", 'String'>
    readonly reflectionTime: FieldRef<"Classroom", 'String'>
    readonly tasksPerDay: FieldRef<"Classroom", 'Int'>
    readonly dayParts: FieldRef<"Classroom", 'Json'>
    readonly timezone: FieldRef<"Classroom", 'String'>
    readonly allowLateGoalEdits: FieldRef<"Classroom", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom createManyAndReturn
   */
  export type ClassroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom updateManyAndReturn
   */
  export type ClassroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom.members
   */
  export type Classroom$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    where?: ClassroomMemberWhereInput
    orderBy?: ClassroomMemberOrderByWithRelationInput | ClassroomMemberOrderByWithRelationInput[]
    cursor?: ClassroomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomMemberScalarFieldEnum | ClassroomMemberScalarFieldEnum[]
  }

  /**
   * Classroom.joinRequests
   */
  export type Classroom$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    where?: ClassroomJoinRequestWhereInput
    orderBy?: ClassroomJoinRequestOrderByWithRelationInput | ClassroomJoinRequestOrderByWithRelationInput[]
    cursor?: ClassroomJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomJoinRequestScalarFieldEnum | ClassroomJoinRequestScalarFieldEnum[]
  }

  /**
   * Classroom.dailyGoals
   */
  export type Classroom$dailyGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    where?: DailyGoalWhereInput
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    cursor?: DailyGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * Classroom.dailyReflections
   */
  export type Classroom$dailyReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    where?: DailyReflectionWhereInput
    orderBy?: DailyReflectionOrderByWithRelationInput | DailyReflectionOrderByWithRelationInput[]
    cursor?: DailyReflectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReflectionScalarFieldEnum | DailyReflectionScalarFieldEnum[]
  }

  /**
   * Classroom.notifications
   */
  export type Classroom$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    where?: ClassroomNotificationWhereInput
    orderBy?: ClassroomNotificationOrderByWithRelationInput | ClassroomNotificationOrderByWithRelationInput[]
    cursor?: ClassroomNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomNotificationScalarFieldEnum | ClassroomNotificationScalarFieldEnum[]
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
  }


  /**
   * Model ClassroomMember
   */

  export type AggregateClassroomMember = {
    _count: ClassroomMemberCountAggregateOutputType | null
    _min: ClassroomMemberMinAggregateOutputType | null
    _max: ClassroomMemberMaxAggregateOutputType | null
  }

  export type ClassroomMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    role: $Enums.MemberRole | null
    joinedAt: Date | null
  }

  export type ClassroomMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    role: $Enums.MemberRole | null
    joinedAt: Date | null
  }

  export type ClassroomMemberCountAggregateOutputType = {
    id: number
    userId: number
    classroomId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type ClassroomMemberMinAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    role?: true
    joinedAt?: true
  }

  export type ClassroomMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    role?: true
    joinedAt?: true
  }

  export type ClassroomMemberCountAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type ClassroomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomMember to aggregate.
     */
    where?: ClassroomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMembers to fetch.
     */
    orderBy?: ClassroomMemberOrderByWithRelationInput | ClassroomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomMembers
    **/
    _count?: true | ClassroomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMemberMaxAggregateInputType
  }

  export type GetClassroomMemberAggregateType<T extends ClassroomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomMember[P]>
      : GetScalarType<T[P], AggregateClassroomMember[P]>
  }




  export type ClassroomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomMemberWhereInput
    orderBy?: ClassroomMemberOrderByWithAggregationInput | ClassroomMemberOrderByWithAggregationInput[]
    by: ClassroomMemberScalarFieldEnum[] | ClassroomMemberScalarFieldEnum
    having?: ClassroomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomMemberCountAggregateInputType | true
    _min?: ClassroomMemberMinAggregateInputType
    _max?: ClassroomMemberMaxAggregateInputType
  }

  export type ClassroomMemberGroupByOutputType = {
    id: string
    userId: string
    classroomId: string
    role: $Enums.MemberRole
    joinedAt: Date
    _count: ClassroomMemberCountAggregateOutputType | null
    _min: ClassroomMemberMinAggregateOutputType | null
    _max: ClassroomMemberMaxAggregateOutputType | null
  }

  type GetClassroomMemberGroupByPayload<T extends ClassroomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomMemberGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomMember"]>

  export type ClassroomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomMember"]>

  export type ClassroomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomMember"]>

  export type ClassroomMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type ClassroomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "classroomId" | "role" | "joinedAt", ExtArgs["result"]["classroomMember"]>
  export type ClassroomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassroomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassroomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $ClassroomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      classroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      classroomId: string
      role: $Enums.MemberRole
      joinedAt: Date
    }, ExtArgs["result"]["classroomMember"]>
    composites: {}
  }

  type ClassroomMemberGetPayload<S extends boolean | null | undefined | ClassroomMemberDefaultArgs> = $Result.GetResult<Prisma.$ClassroomMemberPayload, S>

  type ClassroomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomMemberCountAggregateInputType | true
    }

  export interface ClassroomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomMember'], meta: { name: 'ClassroomMember' } }
    /**
     * Find zero or one ClassroomMember that matches the filter.
     * @param {ClassroomMemberFindUniqueArgs} args - Arguments to find a ClassroomMember
     * @example
     * // Get one ClassroomMember
     * const classroomMember = await prisma.classroomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomMemberFindUniqueArgs>(args: SelectSubset<T, ClassroomMemberFindUniqueArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomMemberFindUniqueOrThrowArgs} args - Arguments to find a ClassroomMember
     * @example
     * // Get one ClassroomMember
     * const classroomMember = await prisma.classroomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberFindFirstArgs} args - Arguments to find a ClassroomMember
     * @example
     * // Get one ClassroomMember
     * const classroomMember = await prisma.classroomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomMemberFindFirstArgs>(args?: SelectSubset<T, ClassroomMemberFindFirstArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberFindFirstOrThrowArgs} args - Arguments to find a ClassroomMember
     * @example
     * // Get one ClassroomMember
     * const classroomMember = await prisma.classroomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomMembers
     * const classroomMembers = await prisma.classroomMember.findMany()
     * 
     * // Get first 10 ClassroomMembers
     * const classroomMembers = await prisma.classroomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomMemberWithIdOnly = await prisma.classroomMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomMemberFindManyArgs>(args?: SelectSubset<T, ClassroomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomMember.
     * @param {ClassroomMemberCreateArgs} args - Arguments to create a ClassroomMember.
     * @example
     * // Create one ClassroomMember
     * const ClassroomMember = await prisma.classroomMember.create({
     *   data: {
     *     // ... data to create a ClassroomMember
     *   }
     * })
     * 
     */
    create<T extends ClassroomMemberCreateArgs>(args: SelectSubset<T, ClassroomMemberCreateArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomMembers.
     * @param {ClassroomMemberCreateManyArgs} args - Arguments to create many ClassroomMembers.
     * @example
     * // Create many ClassroomMembers
     * const classroomMember = await prisma.classroomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomMemberCreateManyArgs>(args?: SelectSubset<T, ClassroomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomMembers and returns the data saved in the database.
     * @param {ClassroomMemberCreateManyAndReturnArgs} args - Arguments to create many ClassroomMembers.
     * @example
     * // Create many ClassroomMembers
     * const classroomMember = await prisma.classroomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomMembers and only return the `id`
     * const classroomMemberWithIdOnly = await prisma.classroomMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomMember.
     * @param {ClassroomMemberDeleteArgs} args - Arguments to delete one ClassroomMember.
     * @example
     * // Delete one ClassroomMember
     * const ClassroomMember = await prisma.classroomMember.delete({
     *   where: {
     *     // ... filter to delete one ClassroomMember
     *   }
     * })
     * 
     */
    delete<T extends ClassroomMemberDeleteArgs>(args: SelectSubset<T, ClassroomMemberDeleteArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomMember.
     * @param {ClassroomMemberUpdateArgs} args - Arguments to update one ClassroomMember.
     * @example
     * // Update one ClassroomMember
     * const classroomMember = await prisma.classroomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomMemberUpdateArgs>(args: SelectSubset<T, ClassroomMemberUpdateArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomMembers.
     * @param {ClassroomMemberDeleteManyArgs} args - Arguments to filter ClassroomMembers to delete.
     * @example
     * // Delete a few ClassroomMembers
     * const { count } = await prisma.classroomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomMemberDeleteManyArgs>(args?: SelectSubset<T, ClassroomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomMembers
     * const classroomMember = await prisma.classroomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomMemberUpdateManyArgs>(args: SelectSubset<T, ClassroomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomMembers and returns the data updated in the database.
     * @param {ClassroomMemberUpdateManyAndReturnArgs} args - Arguments to update many ClassroomMembers.
     * @example
     * // Update many ClassroomMembers
     * const classroomMember = await prisma.classroomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomMembers and only return the `id`
     * const classroomMemberWithIdOnly = await prisma.classroomMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomMember.
     * @param {ClassroomMemberUpsertArgs} args - Arguments to update or create a ClassroomMember.
     * @example
     * // Update or create a ClassroomMember
     * const classroomMember = await prisma.classroomMember.upsert({
     *   create: {
     *     // ... data to create a ClassroomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomMember we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomMemberUpsertArgs>(args: SelectSubset<T, ClassroomMemberUpsertArgs<ExtArgs>>): Prisma__ClassroomMemberClient<$Result.GetResult<Prisma.$ClassroomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberCountArgs} args - Arguments to filter ClassroomMembers to count.
     * @example
     * // Count the number of ClassroomMembers
     * const count = await prisma.classroomMember.count({
     *   where: {
     *     // ... the filter for the ClassroomMembers we want to count
     *   }
     * })
    **/
    count<T extends ClassroomMemberCountArgs>(
      args?: Subset<T, ClassroomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomMemberAggregateArgs>(args: Subset<T, ClassroomMemberAggregateArgs>): Prisma.PrismaPromise<GetClassroomMemberAggregateType<T>>

    /**
     * Group by ClassroomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomMemberGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomMember model
   */
  readonly fields: ClassroomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassroomMember model
   */
  interface ClassroomMemberFieldRefs {
    readonly id: FieldRef<"ClassroomMember", 'String'>
    readonly userId: FieldRef<"ClassroomMember", 'String'>
    readonly classroomId: FieldRef<"ClassroomMember", 'String'>
    readonly role: FieldRef<"ClassroomMember", 'MemberRole'>
    readonly joinedAt: FieldRef<"ClassroomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomMember findUnique
   */
  export type ClassroomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMember to fetch.
     */
    where: ClassroomMemberWhereUniqueInput
  }

  /**
   * ClassroomMember findUniqueOrThrow
   */
  export type ClassroomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMember to fetch.
     */
    where: ClassroomMemberWhereUniqueInput
  }

  /**
   * ClassroomMember findFirst
   */
  export type ClassroomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMember to fetch.
     */
    where?: ClassroomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMembers to fetch.
     */
    orderBy?: ClassroomMemberOrderByWithRelationInput | ClassroomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomMembers.
     */
    cursor?: ClassroomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomMembers.
     */
    distinct?: ClassroomMemberScalarFieldEnum | ClassroomMemberScalarFieldEnum[]
  }

  /**
   * ClassroomMember findFirstOrThrow
   */
  export type ClassroomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMember to fetch.
     */
    where?: ClassroomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMembers to fetch.
     */
    orderBy?: ClassroomMemberOrderByWithRelationInput | ClassroomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomMembers.
     */
    cursor?: ClassroomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomMembers.
     */
    distinct?: ClassroomMemberScalarFieldEnum | ClassroomMemberScalarFieldEnum[]
  }

  /**
   * ClassroomMember findMany
   */
  export type ClassroomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMembers to fetch.
     */
    where?: ClassroomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMembers to fetch.
     */
    orderBy?: ClassroomMemberOrderByWithRelationInput | ClassroomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomMembers.
     */
    cursor?: ClassroomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomMembers.
     */
    distinct?: ClassroomMemberScalarFieldEnum | ClassroomMemberScalarFieldEnum[]
  }

  /**
   * ClassroomMember create
   */
  export type ClassroomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomMember.
     */
    data: XOR<ClassroomMemberCreateInput, ClassroomMemberUncheckedCreateInput>
  }

  /**
   * ClassroomMember createMany
   */
  export type ClassroomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomMembers.
     */
    data: ClassroomMemberCreateManyInput | ClassroomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomMember createManyAndReturn
   */
  export type ClassroomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomMembers.
     */
    data: ClassroomMemberCreateManyInput | ClassroomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomMember update
   */
  export type ClassroomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomMember.
     */
    data: XOR<ClassroomMemberUpdateInput, ClassroomMemberUncheckedUpdateInput>
    /**
     * Choose, which ClassroomMember to update.
     */
    where: ClassroomMemberWhereUniqueInput
  }

  /**
   * ClassroomMember updateMany
   */
  export type ClassroomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomMembers.
     */
    data: XOR<ClassroomMemberUpdateManyMutationInput, ClassroomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomMembers to update
     */
    where?: ClassroomMemberWhereInput
    /**
     * Limit how many ClassroomMembers to update.
     */
    limit?: number
  }

  /**
   * ClassroomMember updateManyAndReturn
   */
  export type ClassroomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomMembers.
     */
    data: XOR<ClassroomMemberUpdateManyMutationInput, ClassroomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomMembers to update
     */
    where?: ClassroomMemberWhereInput
    /**
     * Limit how many ClassroomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomMember upsert
   */
  export type ClassroomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomMember to update in case it exists.
     */
    where: ClassroomMemberWhereUniqueInput
    /**
     * In case the ClassroomMember found by the `where` argument doesn't exist, create a new ClassroomMember with this data.
     */
    create: XOR<ClassroomMemberCreateInput, ClassroomMemberUncheckedCreateInput>
    /**
     * In case the ClassroomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomMemberUpdateInput, ClassroomMemberUncheckedUpdateInput>
  }

  /**
   * ClassroomMember delete
   */
  export type ClassroomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
    /**
     * Filter which ClassroomMember to delete.
     */
    where: ClassroomMemberWhereUniqueInput
  }

  /**
   * ClassroomMember deleteMany
   */
  export type ClassroomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomMembers to delete
     */
    where?: ClassroomMemberWhereInput
    /**
     * Limit how many ClassroomMembers to delete.
     */
    limit?: number
  }

  /**
   * ClassroomMember without action
   */
  export type ClassroomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMember
     */
    select?: ClassroomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMember
     */
    omit?: ClassroomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMemberInclude<ExtArgs> | null
  }


  /**
   * Model ClassroomJoinRequest
   */

  export type AggregateClassroomJoinRequest = {
    _count: ClassroomJoinRequestCountAggregateOutputType | null
    _min: ClassroomJoinRequestMinAggregateOutputType | null
    _max: ClassroomJoinRequestMaxAggregateOutputType | null
  }

  export type ClassroomJoinRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    status: $Enums.JoinRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassroomJoinRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    status: $Enums.JoinRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassroomJoinRequestCountAggregateOutputType = {
    id: number
    userId: number
    classroomId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassroomJoinRequestMinAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassroomJoinRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassroomJoinRequestCountAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassroomJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomJoinRequest to aggregate.
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomJoinRequests to fetch.
     */
    orderBy?: ClassroomJoinRequestOrderByWithRelationInput | ClassroomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomJoinRequests
    **/
    _count?: true | ClassroomJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomJoinRequestMaxAggregateInputType
  }

  export type GetClassroomJoinRequestAggregateType<T extends ClassroomJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomJoinRequest[P]>
      : GetScalarType<T[P], AggregateClassroomJoinRequest[P]>
  }




  export type ClassroomJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomJoinRequestWhereInput
    orderBy?: ClassroomJoinRequestOrderByWithAggregationInput | ClassroomJoinRequestOrderByWithAggregationInput[]
    by: ClassroomJoinRequestScalarFieldEnum[] | ClassroomJoinRequestScalarFieldEnum
    having?: ClassroomJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomJoinRequestCountAggregateInputType | true
    _min?: ClassroomJoinRequestMinAggregateInputType
    _max?: ClassroomJoinRequestMaxAggregateInputType
  }

  export type ClassroomJoinRequestGroupByOutputType = {
    id: string
    userId: string
    classroomId: string
    status: $Enums.JoinRequestStatus
    createdAt: Date
    updatedAt: Date
    _count: ClassroomJoinRequestCountAggregateOutputType | null
    _min: ClassroomJoinRequestMinAggregateOutputType | null
    _max: ClassroomJoinRequestMaxAggregateOutputType | null
  }

  type GetClassroomJoinRequestGroupByPayload<T extends ClassroomJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomJoinRequest"]>

  export type ClassroomJoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomJoinRequest"]>

  export type ClassroomJoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomJoinRequest"]>

  export type ClassroomJoinRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassroomJoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "classroomId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["classroomJoinRequest"]>
  export type ClassroomJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassroomJoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type ClassroomJoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $ClassroomJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomJoinRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      classroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      classroomId: string
      status: $Enums.JoinRequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classroomJoinRequest"]>
    composites: {}
  }

  type ClassroomJoinRequestGetPayload<S extends boolean | null | undefined | ClassroomJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$ClassroomJoinRequestPayload, S>

  type ClassroomJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomJoinRequestCountAggregateInputType | true
    }

  export interface ClassroomJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomJoinRequest'], meta: { name: 'ClassroomJoinRequest' } }
    /**
     * Find zero or one ClassroomJoinRequest that matches the filter.
     * @param {ClassroomJoinRequestFindUniqueArgs} args - Arguments to find a ClassroomJoinRequest
     * @example
     * // Get one ClassroomJoinRequest
     * const classroomJoinRequest = await prisma.classroomJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomJoinRequestFindUniqueArgs>(args: SelectSubset<T, ClassroomJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a ClassroomJoinRequest
     * @example
     * // Get one ClassroomJoinRequest
     * const classroomJoinRequest = await prisma.classroomJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestFindFirstArgs} args - Arguments to find a ClassroomJoinRequest
     * @example
     * // Get one ClassroomJoinRequest
     * const classroomJoinRequest = await prisma.classroomJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomJoinRequestFindFirstArgs>(args?: SelectSubset<T, ClassroomJoinRequestFindFirstArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestFindFirstOrThrowArgs} args - Arguments to find a ClassroomJoinRequest
     * @example
     * // Get one ClassroomJoinRequest
     * const classroomJoinRequest = await prisma.classroomJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomJoinRequests
     * const classroomJoinRequests = await prisma.classroomJoinRequest.findMany()
     * 
     * // Get first 10 ClassroomJoinRequests
     * const classroomJoinRequests = await prisma.classroomJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomJoinRequestWithIdOnly = await prisma.classroomJoinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomJoinRequestFindManyArgs>(args?: SelectSubset<T, ClassroomJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomJoinRequest.
     * @param {ClassroomJoinRequestCreateArgs} args - Arguments to create a ClassroomJoinRequest.
     * @example
     * // Create one ClassroomJoinRequest
     * const ClassroomJoinRequest = await prisma.classroomJoinRequest.create({
     *   data: {
     *     // ... data to create a ClassroomJoinRequest
     *   }
     * })
     * 
     */
    create<T extends ClassroomJoinRequestCreateArgs>(args: SelectSubset<T, ClassroomJoinRequestCreateArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomJoinRequests.
     * @param {ClassroomJoinRequestCreateManyArgs} args - Arguments to create many ClassroomJoinRequests.
     * @example
     * // Create many ClassroomJoinRequests
     * const classroomJoinRequest = await prisma.classroomJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomJoinRequestCreateManyArgs>(args?: SelectSubset<T, ClassroomJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomJoinRequests and returns the data saved in the database.
     * @param {ClassroomJoinRequestCreateManyAndReturnArgs} args - Arguments to create many ClassroomJoinRequests.
     * @example
     * // Create many ClassroomJoinRequests
     * const classroomJoinRequest = await prisma.classroomJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomJoinRequests and only return the `id`
     * const classroomJoinRequestWithIdOnly = await prisma.classroomJoinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomJoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomJoinRequest.
     * @param {ClassroomJoinRequestDeleteArgs} args - Arguments to delete one ClassroomJoinRequest.
     * @example
     * // Delete one ClassroomJoinRequest
     * const ClassroomJoinRequest = await prisma.classroomJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one ClassroomJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends ClassroomJoinRequestDeleteArgs>(args: SelectSubset<T, ClassroomJoinRequestDeleteArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomJoinRequest.
     * @param {ClassroomJoinRequestUpdateArgs} args - Arguments to update one ClassroomJoinRequest.
     * @example
     * // Update one ClassroomJoinRequest
     * const classroomJoinRequest = await prisma.classroomJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomJoinRequestUpdateArgs>(args: SelectSubset<T, ClassroomJoinRequestUpdateArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomJoinRequests.
     * @param {ClassroomJoinRequestDeleteManyArgs} args - Arguments to filter ClassroomJoinRequests to delete.
     * @example
     * // Delete a few ClassroomJoinRequests
     * const { count } = await prisma.classroomJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomJoinRequestDeleteManyArgs>(args?: SelectSubset<T, ClassroomJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomJoinRequests
     * const classroomJoinRequest = await prisma.classroomJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomJoinRequestUpdateManyArgs>(args: SelectSubset<T, ClassroomJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomJoinRequests and returns the data updated in the database.
     * @param {ClassroomJoinRequestUpdateManyAndReturnArgs} args - Arguments to update many ClassroomJoinRequests.
     * @example
     * // Update many ClassroomJoinRequests
     * const classroomJoinRequest = await prisma.classroomJoinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomJoinRequests and only return the `id`
     * const classroomJoinRequestWithIdOnly = await prisma.classroomJoinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomJoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomJoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomJoinRequest.
     * @param {ClassroomJoinRequestUpsertArgs} args - Arguments to update or create a ClassroomJoinRequest.
     * @example
     * // Update or create a ClassroomJoinRequest
     * const classroomJoinRequest = await prisma.classroomJoinRequest.upsert({
     *   create: {
     *     // ... data to create a ClassroomJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomJoinRequestUpsertArgs>(args: SelectSubset<T, ClassroomJoinRequestUpsertArgs<ExtArgs>>): Prisma__ClassroomJoinRequestClient<$Result.GetResult<Prisma.$ClassroomJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestCountArgs} args - Arguments to filter ClassroomJoinRequests to count.
     * @example
     * // Count the number of ClassroomJoinRequests
     * const count = await prisma.classroomJoinRequest.count({
     *   where: {
     *     // ... the filter for the ClassroomJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends ClassroomJoinRequestCountArgs>(
      args?: Subset<T, ClassroomJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomJoinRequestAggregateArgs>(args: Subset<T, ClassroomJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetClassroomJoinRequestAggregateType<T>>

    /**
     * Group by ClassroomJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomJoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomJoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomJoinRequest model
   */
  readonly fields: ClassroomJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassroomJoinRequest model
   */
  interface ClassroomJoinRequestFieldRefs {
    readonly id: FieldRef<"ClassroomJoinRequest", 'String'>
    readonly userId: FieldRef<"ClassroomJoinRequest", 'String'>
    readonly classroomId: FieldRef<"ClassroomJoinRequest", 'String'>
    readonly status: FieldRef<"ClassroomJoinRequest", 'JoinRequestStatus'>
    readonly createdAt: FieldRef<"ClassroomJoinRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassroomJoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomJoinRequest findUnique
   */
  export type ClassroomJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomJoinRequest to fetch.
     */
    where: ClassroomJoinRequestWhereUniqueInput
  }

  /**
   * ClassroomJoinRequest findUniqueOrThrow
   */
  export type ClassroomJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomJoinRequest to fetch.
     */
    where: ClassroomJoinRequestWhereUniqueInput
  }

  /**
   * ClassroomJoinRequest findFirst
   */
  export type ClassroomJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomJoinRequest to fetch.
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomJoinRequests to fetch.
     */
    orderBy?: ClassroomJoinRequestOrderByWithRelationInput | ClassroomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomJoinRequests.
     */
    cursor?: ClassroomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomJoinRequests.
     */
    distinct?: ClassroomJoinRequestScalarFieldEnum | ClassroomJoinRequestScalarFieldEnum[]
  }

  /**
   * ClassroomJoinRequest findFirstOrThrow
   */
  export type ClassroomJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomJoinRequest to fetch.
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomJoinRequests to fetch.
     */
    orderBy?: ClassroomJoinRequestOrderByWithRelationInput | ClassroomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomJoinRequests.
     */
    cursor?: ClassroomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomJoinRequests.
     */
    distinct?: ClassroomJoinRequestScalarFieldEnum | ClassroomJoinRequestScalarFieldEnum[]
  }

  /**
   * ClassroomJoinRequest findMany
   */
  export type ClassroomJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomJoinRequests to fetch.
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomJoinRequests to fetch.
     */
    orderBy?: ClassroomJoinRequestOrderByWithRelationInput | ClassroomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomJoinRequests.
     */
    cursor?: ClassroomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomJoinRequests.
     */
    distinct?: ClassroomJoinRequestScalarFieldEnum | ClassroomJoinRequestScalarFieldEnum[]
  }

  /**
   * ClassroomJoinRequest create
   */
  export type ClassroomJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomJoinRequest.
     */
    data: XOR<ClassroomJoinRequestCreateInput, ClassroomJoinRequestUncheckedCreateInput>
  }

  /**
   * ClassroomJoinRequest createMany
   */
  export type ClassroomJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomJoinRequests.
     */
    data: ClassroomJoinRequestCreateManyInput | ClassroomJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomJoinRequest createManyAndReturn
   */
  export type ClassroomJoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomJoinRequests.
     */
    data: ClassroomJoinRequestCreateManyInput | ClassroomJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomJoinRequest update
   */
  export type ClassroomJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomJoinRequest.
     */
    data: XOR<ClassroomJoinRequestUpdateInput, ClassroomJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which ClassroomJoinRequest to update.
     */
    where: ClassroomJoinRequestWhereUniqueInput
  }

  /**
   * ClassroomJoinRequest updateMany
   */
  export type ClassroomJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomJoinRequests.
     */
    data: XOR<ClassroomJoinRequestUpdateManyMutationInput, ClassroomJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomJoinRequests to update
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * Limit how many ClassroomJoinRequests to update.
     */
    limit?: number
  }

  /**
   * ClassroomJoinRequest updateManyAndReturn
   */
  export type ClassroomJoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomJoinRequests.
     */
    data: XOR<ClassroomJoinRequestUpdateManyMutationInput, ClassroomJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomJoinRequests to update
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * Limit how many ClassroomJoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomJoinRequest upsert
   */
  export type ClassroomJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomJoinRequest to update in case it exists.
     */
    where: ClassroomJoinRequestWhereUniqueInput
    /**
     * In case the ClassroomJoinRequest found by the `where` argument doesn't exist, create a new ClassroomJoinRequest with this data.
     */
    create: XOR<ClassroomJoinRequestCreateInput, ClassroomJoinRequestUncheckedCreateInput>
    /**
     * In case the ClassroomJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomJoinRequestUpdateInput, ClassroomJoinRequestUncheckedUpdateInput>
  }

  /**
   * ClassroomJoinRequest delete
   */
  export type ClassroomJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which ClassroomJoinRequest to delete.
     */
    where: ClassroomJoinRequestWhereUniqueInput
  }

  /**
   * ClassroomJoinRequest deleteMany
   */
  export type ClassroomJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomJoinRequests to delete
     */
    where?: ClassroomJoinRequestWhereInput
    /**
     * Limit how many ClassroomJoinRequests to delete.
     */
    limit?: number
  }

  /**
   * ClassroomJoinRequest without action
   */
  export type ClassroomJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomJoinRequest
     */
    select?: ClassroomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomJoinRequest
     */
    omit?: ClassroomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model DailyGoal
   */

  export type AggregateDailyGoal = {
    _count: DailyGoalCountAggregateOutputType | null
    _min: DailyGoalMinAggregateOutputType | null
    _max: DailyGoalMaxAggregateOutputType | null
  }

  export type DailyGoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    date: Date | null
    statement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyGoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    date: Date | null
    statement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyGoalCountAggregateOutputType = {
    id: number
    userId: number
    classroomId: number
    date: number
    statement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyGoalMinAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    date?: true
    statement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyGoalMaxAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    date?: true
    statement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyGoalCountAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    date?: true
    statement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyGoal to aggregate.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyGoals
    **/
    _count?: true | DailyGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyGoalMaxAggregateInputType
  }

  export type GetDailyGoalAggregateType<T extends DailyGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyGoal[P]>
      : GetScalarType<T[P], AggregateDailyGoal[P]>
  }




  export type DailyGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyGoalWhereInput
    orderBy?: DailyGoalOrderByWithAggregationInput | DailyGoalOrderByWithAggregationInput[]
    by: DailyGoalScalarFieldEnum[] | DailyGoalScalarFieldEnum
    having?: DailyGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyGoalCountAggregateInputType | true
    _min?: DailyGoalMinAggregateInputType
    _max?: DailyGoalMaxAggregateInputType
  }

  export type DailyGoalGroupByOutputType = {
    id: string
    userId: string
    classroomId: string
    date: Date
    statement: string | null
    createdAt: Date
    updatedAt: Date
    _count: DailyGoalCountAggregateOutputType | null
    _min: DailyGoalMinAggregateOutputType | null
    _max: DailyGoalMaxAggregateOutputType | null
  }

  type GetDailyGoalGroupByPayload<T extends DailyGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyGoalGroupByOutputType[P]>
            : GetScalarType<T[P], DailyGoalGroupByOutputType[P]>
        }
      >
    >


  export type DailyGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    statement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    tasks?: boolean | DailyGoal$tasksArgs<ExtArgs>
    _count?: boolean | DailyGoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoal"]>

  export type DailyGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    statement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoal"]>

  export type DailyGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    statement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoal"]>

  export type DailyGoalSelectScalar = {
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    statement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "classroomId" | "date" | "statement" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyGoal"]>
  export type DailyGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    tasks?: boolean | DailyGoal$tasksArgs<ExtArgs>
    _count?: boolean | DailyGoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type DailyGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $DailyGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      classroom: Prisma.$ClassroomPayload<ExtArgs>
      tasks: Prisma.$DailyGoalTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      classroomId: string
      date: Date
      statement: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyGoal"]>
    composites: {}
  }

  type DailyGoalGetPayload<S extends boolean | null | undefined | DailyGoalDefaultArgs> = $Result.GetResult<Prisma.$DailyGoalPayload, S>

  type DailyGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyGoalCountAggregateInputType | true
    }

  export interface DailyGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyGoal'], meta: { name: 'DailyGoal' } }
    /**
     * Find zero or one DailyGoal that matches the filter.
     * @param {DailyGoalFindUniqueArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyGoalFindUniqueArgs>(args: SelectSubset<T, DailyGoalFindUniqueArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyGoalFindUniqueOrThrowArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalFindFirstArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyGoalFindFirstArgs>(args?: SelectSubset<T, DailyGoalFindFirstArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalFindFirstOrThrowArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyGoals
     * const dailyGoals = await prisma.dailyGoal.findMany()
     * 
     * // Get first 10 DailyGoals
     * const dailyGoals = await prisma.dailyGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyGoalWithIdOnly = await prisma.dailyGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyGoalFindManyArgs>(args?: SelectSubset<T, DailyGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyGoal.
     * @param {DailyGoalCreateArgs} args - Arguments to create a DailyGoal.
     * @example
     * // Create one DailyGoal
     * const DailyGoal = await prisma.dailyGoal.create({
     *   data: {
     *     // ... data to create a DailyGoal
     *   }
     * })
     * 
     */
    create<T extends DailyGoalCreateArgs>(args: SelectSubset<T, DailyGoalCreateArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyGoals.
     * @param {DailyGoalCreateManyArgs} args - Arguments to create many DailyGoals.
     * @example
     * // Create many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyGoalCreateManyArgs>(args?: SelectSubset<T, DailyGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyGoals and returns the data saved in the database.
     * @param {DailyGoalCreateManyAndReturnArgs} args - Arguments to create many DailyGoals.
     * @example
     * // Create many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyGoals and only return the `id`
     * const dailyGoalWithIdOnly = await prisma.dailyGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyGoal.
     * @param {DailyGoalDeleteArgs} args - Arguments to delete one DailyGoal.
     * @example
     * // Delete one DailyGoal
     * const DailyGoal = await prisma.dailyGoal.delete({
     *   where: {
     *     // ... filter to delete one DailyGoal
     *   }
     * })
     * 
     */
    delete<T extends DailyGoalDeleteArgs>(args: SelectSubset<T, DailyGoalDeleteArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyGoal.
     * @param {DailyGoalUpdateArgs} args - Arguments to update one DailyGoal.
     * @example
     * // Update one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyGoalUpdateArgs>(args: SelectSubset<T, DailyGoalUpdateArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyGoals.
     * @param {DailyGoalDeleteManyArgs} args - Arguments to filter DailyGoals to delete.
     * @example
     * // Delete a few DailyGoals
     * const { count } = await prisma.dailyGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyGoalDeleteManyArgs>(args?: SelectSubset<T, DailyGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyGoalUpdateManyArgs>(args: SelectSubset<T, DailyGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyGoals and returns the data updated in the database.
     * @param {DailyGoalUpdateManyAndReturnArgs} args - Arguments to update many DailyGoals.
     * @example
     * // Update many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyGoals and only return the `id`
     * const dailyGoalWithIdOnly = await prisma.dailyGoal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyGoal.
     * @param {DailyGoalUpsertArgs} args - Arguments to update or create a DailyGoal.
     * @example
     * // Update or create a DailyGoal
     * const dailyGoal = await prisma.dailyGoal.upsert({
     *   create: {
     *     // ... data to create a DailyGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyGoal we want to update
     *   }
     * })
     */
    upsert<T extends DailyGoalUpsertArgs>(args: SelectSubset<T, DailyGoalUpsertArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalCountArgs} args - Arguments to filter DailyGoals to count.
     * @example
     * // Count the number of DailyGoals
     * const count = await prisma.dailyGoal.count({
     *   where: {
     *     // ... the filter for the DailyGoals we want to count
     *   }
     * })
    **/
    count<T extends DailyGoalCountArgs>(
      args?: Subset<T, DailyGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyGoalAggregateArgs>(args: Subset<T, DailyGoalAggregateArgs>): Prisma.PrismaPromise<GetDailyGoalAggregateType<T>>

    /**
     * Group by DailyGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyGoalGroupByArgs['orderBy'] }
        : { orderBy?: DailyGoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyGoal model
   */
  readonly fields: DailyGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends DailyGoal$tasksArgs<ExtArgs> = {}>(args?: Subset<T, DailyGoal$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyGoal model
   */
  interface DailyGoalFieldRefs {
    readonly id: FieldRef<"DailyGoal", 'String'>
    readonly userId: FieldRef<"DailyGoal", 'String'>
    readonly classroomId: FieldRef<"DailyGoal", 'String'>
    readonly date: FieldRef<"DailyGoal", 'DateTime'>
    readonly statement: FieldRef<"DailyGoal", 'String'>
    readonly createdAt: FieldRef<"DailyGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyGoal findUnique
   */
  export type DailyGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal findUniqueOrThrow
   */
  export type DailyGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal findFirst
   */
  export type DailyGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyGoals.
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoals.
     */
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * DailyGoal findFirstOrThrow
   */
  export type DailyGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyGoals.
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoals.
     */
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * DailyGoal findMany
   */
  export type DailyGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoals to fetch.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyGoals.
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoals.
     */
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * DailyGoal create
   */
  export type DailyGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyGoal.
     */
    data: XOR<DailyGoalCreateInput, DailyGoalUncheckedCreateInput>
  }

  /**
   * DailyGoal createMany
   */
  export type DailyGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyGoals.
     */
    data: DailyGoalCreateManyInput | DailyGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyGoal createManyAndReturn
   */
  export type DailyGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * The data used to create many DailyGoals.
     */
    data: DailyGoalCreateManyInput | DailyGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyGoal update
   */
  export type DailyGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyGoal.
     */
    data: XOR<DailyGoalUpdateInput, DailyGoalUncheckedUpdateInput>
    /**
     * Choose, which DailyGoal to update.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal updateMany
   */
  export type DailyGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyGoals.
     */
    data: XOR<DailyGoalUpdateManyMutationInput, DailyGoalUncheckedUpdateManyInput>
    /**
     * Filter which DailyGoals to update
     */
    where?: DailyGoalWhereInput
    /**
     * Limit how many DailyGoals to update.
     */
    limit?: number
  }

  /**
   * DailyGoal updateManyAndReturn
   */
  export type DailyGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * The data used to update DailyGoals.
     */
    data: XOR<DailyGoalUpdateManyMutationInput, DailyGoalUncheckedUpdateManyInput>
    /**
     * Filter which DailyGoals to update
     */
    where?: DailyGoalWhereInput
    /**
     * Limit how many DailyGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyGoal upsert
   */
  export type DailyGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyGoal to update in case it exists.
     */
    where: DailyGoalWhereUniqueInput
    /**
     * In case the DailyGoal found by the `where` argument doesn't exist, create a new DailyGoal with this data.
     */
    create: XOR<DailyGoalCreateInput, DailyGoalUncheckedCreateInput>
    /**
     * In case the DailyGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyGoalUpdateInput, DailyGoalUncheckedUpdateInput>
  }

  /**
   * DailyGoal delete
   */
  export type DailyGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter which DailyGoal to delete.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal deleteMany
   */
  export type DailyGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyGoals to delete
     */
    where?: DailyGoalWhereInput
    /**
     * Limit how many DailyGoals to delete.
     */
    limit?: number
  }

  /**
   * DailyGoal.tasks
   */
  export type DailyGoal$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    where?: DailyGoalTaskWhereInput
    orderBy?: DailyGoalTaskOrderByWithRelationInput | DailyGoalTaskOrderByWithRelationInput[]
    cursor?: DailyGoalTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyGoalTaskScalarFieldEnum | DailyGoalTaskScalarFieldEnum[]
  }

  /**
   * DailyGoal without action
   */
  export type DailyGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
  }


  /**
   * Model DailyGoalTask
   */

  export type AggregateDailyGoalTask = {
    _count: DailyGoalTaskCountAggregateOutputType | null
    _min: DailyGoalTaskMinAggregateOutputType | null
    _max: DailyGoalTaskMaxAggregateOutputType | null
  }

  export type DailyGoalTaskMinAggregateOutputType = {
    id: string | null
    dailyGoalId: string | null
    title: string | null
    completed: boolean | null
    createdAt: Date | null
  }

  export type DailyGoalTaskMaxAggregateOutputType = {
    id: string | null
    dailyGoalId: string | null
    title: string | null
    completed: boolean | null
    createdAt: Date | null
  }

  export type DailyGoalTaskCountAggregateOutputType = {
    id: number
    dailyGoalId: number
    title: number
    completed: number
    createdAt: number
    _all: number
  }


  export type DailyGoalTaskMinAggregateInputType = {
    id?: true
    dailyGoalId?: true
    title?: true
    completed?: true
    createdAt?: true
  }

  export type DailyGoalTaskMaxAggregateInputType = {
    id?: true
    dailyGoalId?: true
    title?: true
    completed?: true
    createdAt?: true
  }

  export type DailyGoalTaskCountAggregateInputType = {
    id?: true
    dailyGoalId?: true
    title?: true
    completed?: true
    createdAt?: true
    _all?: true
  }

  export type DailyGoalTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyGoalTask to aggregate.
     */
    where?: DailyGoalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoalTasks to fetch.
     */
    orderBy?: DailyGoalTaskOrderByWithRelationInput | DailyGoalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyGoalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyGoalTasks
    **/
    _count?: true | DailyGoalTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyGoalTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyGoalTaskMaxAggregateInputType
  }

  export type GetDailyGoalTaskAggregateType<T extends DailyGoalTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyGoalTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyGoalTask[P]>
      : GetScalarType<T[P], AggregateDailyGoalTask[P]>
  }




  export type DailyGoalTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyGoalTaskWhereInput
    orderBy?: DailyGoalTaskOrderByWithAggregationInput | DailyGoalTaskOrderByWithAggregationInput[]
    by: DailyGoalTaskScalarFieldEnum[] | DailyGoalTaskScalarFieldEnum
    having?: DailyGoalTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyGoalTaskCountAggregateInputType | true
    _min?: DailyGoalTaskMinAggregateInputType
    _max?: DailyGoalTaskMaxAggregateInputType
  }

  export type DailyGoalTaskGroupByOutputType = {
    id: string
    dailyGoalId: string
    title: string
    completed: boolean
    createdAt: Date
    _count: DailyGoalTaskCountAggregateOutputType | null
    _min: DailyGoalTaskMinAggregateOutputType | null
    _max: DailyGoalTaskMaxAggregateOutputType | null
  }

  type GetDailyGoalTaskGroupByPayload<T extends DailyGoalTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyGoalTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyGoalTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyGoalTaskGroupByOutputType[P]>
            : GetScalarType<T[P], DailyGoalTaskGroupByOutputType[P]>
        }
      >
    >


  export type DailyGoalTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyGoalId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    dailyGoal?: boolean | DailyGoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoalTask"]>

  export type DailyGoalTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyGoalId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    dailyGoal?: boolean | DailyGoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoalTask"]>

  export type DailyGoalTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyGoalId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    dailyGoal?: boolean | DailyGoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoalTask"]>

  export type DailyGoalTaskSelectScalar = {
    id?: boolean
    dailyGoalId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
  }

  export type DailyGoalTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyGoalId" | "title" | "completed" | "createdAt", ExtArgs["result"]["dailyGoalTask"]>
  export type DailyGoalTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyGoal?: boolean | DailyGoalDefaultArgs<ExtArgs>
  }
  export type DailyGoalTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyGoal?: boolean | DailyGoalDefaultArgs<ExtArgs>
  }
  export type DailyGoalTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyGoal?: boolean | DailyGoalDefaultArgs<ExtArgs>
  }

  export type $DailyGoalTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyGoalTask"
    objects: {
      dailyGoal: Prisma.$DailyGoalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyGoalId: string
      title: string
      completed: boolean
      createdAt: Date
    }, ExtArgs["result"]["dailyGoalTask"]>
    composites: {}
  }

  type DailyGoalTaskGetPayload<S extends boolean | null | undefined | DailyGoalTaskDefaultArgs> = $Result.GetResult<Prisma.$DailyGoalTaskPayload, S>

  type DailyGoalTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyGoalTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyGoalTaskCountAggregateInputType | true
    }

  export interface DailyGoalTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyGoalTask'], meta: { name: 'DailyGoalTask' } }
    /**
     * Find zero or one DailyGoalTask that matches the filter.
     * @param {DailyGoalTaskFindUniqueArgs} args - Arguments to find a DailyGoalTask
     * @example
     * // Get one DailyGoalTask
     * const dailyGoalTask = await prisma.dailyGoalTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyGoalTaskFindUniqueArgs>(args: SelectSubset<T, DailyGoalTaskFindUniqueArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyGoalTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyGoalTaskFindUniqueOrThrowArgs} args - Arguments to find a DailyGoalTask
     * @example
     * // Get one DailyGoalTask
     * const dailyGoalTask = await prisma.dailyGoalTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyGoalTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyGoalTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyGoalTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskFindFirstArgs} args - Arguments to find a DailyGoalTask
     * @example
     * // Get one DailyGoalTask
     * const dailyGoalTask = await prisma.dailyGoalTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyGoalTaskFindFirstArgs>(args?: SelectSubset<T, DailyGoalTaskFindFirstArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyGoalTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskFindFirstOrThrowArgs} args - Arguments to find a DailyGoalTask
     * @example
     * // Get one DailyGoalTask
     * const dailyGoalTask = await prisma.dailyGoalTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyGoalTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyGoalTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyGoalTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyGoalTasks
     * const dailyGoalTasks = await prisma.dailyGoalTask.findMany()
     * 
     * // Get first 10 DailyGoalTasks
     * const dailyGoalTasks = await prisma.dailyGoalTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyGoalTaskWithIdOnly = await prisma.dailyGoalTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyGoalTaskFindManyArgs>(args?: SelectSubset<T, DailyGoalTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyGoalTask.
     * @param {DailyGoalTaskCreateArgs} args - Arguments to create a DailyGoalTask.
     * @example
     * // Create one DailyGoalTask
     * const DailyGoalTask = await prisma.dailyGoalTask.create({
     *   data: {
     *     // ... data to create a DailyGoalTask
     *   }
     * })
     * 
     */
    create<T extends DailyGoalTaskCreateArgs>(args: SelectSubset<T, DailyGoalTaskCreateArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyGoalTasks.
     * @param {DailyGoalTaskCreateManyArgs} args - Arguments to create many DailyGoalTasks.
     * @example
     * // Create many DailyGoalTasks
     * const dailyGoalTask = await prisma.dailyGoalTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyGoalTaskCreateManyArgs>(args?: SelectSubset<T, DailyGoalTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyGoalTasks and returns the data saved in the database.
     * @param {DailyGoalTaskCreateManyAndReturnArgs} args - Arguments to create many DailyGoalTasks.
     * @example
     * // Create many DailyGoalTasks
     * const dailyGoalTask = await prisma.dailyGoalTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyGoalTasks and only return the `id`
     * const dailyGoalTaskWithIdOnly = await prisma.dailyGoalTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyGoalTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyGoalTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyGoalTask.
     * @param {DailyGoalTaskDeleteArgs} args - Arguments to delete one DailyGoalTask.
     * @example
     * // Delete one DailyGoalTask
     * const DailyGoalTask = await prisma.dailyGoalTask.delete({
     *   where: {
     *     // ... filter to delete one DailyGoalTask
     *   }
     * })
     * 
     */
    delete<T extends DailyGoalTaskDeleteArgs>(args: SelectSubset<T, DailyGoalTaskDeleteArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyGoalTask.
     * @param {DailyGoalTaskUpdateArgs} args - Arguments to update one DailyGoalTask.
     * @example
     * // Update one DailyGoalTask
     * const dailyGoalTask = await prisma.dailyGoalTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyGoalTaskUpdateArgs>(args: SelectSubset<T, DailyGoalTaskUpdateArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyGoalTasks.
     * @param {DailyGoalTaskDeleteManyArgs} args - Arguments to filter DailyGoalTasks to delete.
     * @example
     * // Delete a few DailyGoalTasks
     * const { count } = await prisma.dailyGoalTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyGoalTaskDeleteManyArgs>(args?: SelectSubset<T, DailyGoalTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyGoalTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyGoalTasks
     * const dailyGoalTask = await prisma.dailyGoalTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyGoalTaskUpdateManyArgs>(args: SelectSubset<T, DailyGoalTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyGoalTasks and returns the data updated in the database.
     * @param {DailyGoalTaskUpdateManyAndReturnArgs} args - Arguments to update many DailyGoalTasks.
     * @example
     * // Update many DailyGoalTasks
     * const dailyGoalTask = await prisma.dailyGoalTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyGoalTasks and only return the `id`
     * const dailyGoalTaskWithIdOnly = await prisma.dailyGoalTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyGoalTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyGoalTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyGoalTask.
     * @param {DailyGoalTaskUpsertArgs} args - Arguments to update or create a DailyGoalTask.
     * @example
     * // Update or create a DailyGoalTask
     * const dailyGoalTask = await prisma.dailyGoalTask.upsert({
     *   create: {
     *     // ... data to create a DailyGoalTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyGoalTask we want to update
     *   }
     * })
     */
    upsert<T extends DailyGoalTaskUpsertArgs>(args: SelectSubset<T, DailyGoalTaskUpsertArgs<ExtArgs>>): Prisma__DailyGoalTaskClient<$Result.GetResult<Prisma.$DailyGoalTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyGoalTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskCountArgs} args - Arguments to filter DailyGoalTasks to count.
     * @example
     * // Count the number of DailyGoalTasks
     * const count = await prisma.dailyGoalTask.count({
     *   where: {
     *     // ... the filter for the DailyGoalTasks we want to count
     *   }
     * })
    **/
    count<T extends DailyGoalTaskCountArgs>(
      args?: Subset<T, DailyGoalTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyGoalTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyGoalTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyGoalTaskAggregateArgs>(args: Subset<T, DailyGoalTaskAggregateArgs>): Prisma.PrismaPromise<GetDailyGoalTaskAggregateType<T>>

    /**
     * Group by DailyGoalTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyGoalTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyGoalTaskGroupByArgs['orderBy'] }
        : { orderBy?: DailyGoalTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyGoalTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyGoalTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyGoalTask model
   */
  readonly fields: DailyGoalTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyGoalTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyGoalTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyGoal<T extends DailyGoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyGoalDefaultArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyGoalTask model
   */
  interface DailyGoalTaskFieldRefs {
    readonly id: FieldRef<"DailyGoalTask", 'String'>
    readonly dailyGoalId: FieldRef<"DailyGoalTask", 'String'>
    readonly title: FieldRef<"DailyGoalTask", 'String'>
    readonly completed: FieldRef<"DailyGoalTask", 'Boolean'>
    readonly createdAt: FieldRef<"DailyGoalTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyGoalTask findUnique
   */
  export type DailyGoalTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoalTask to fetch.
     */
    where: DailyGoalTaskWhereUniqueInput
  }

  /**
   * DailyGoalTask findUniqueOrThrow
   */
  export type DailyGoalTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoalTask to fetch.
     */
    where: DailyGoalTaskWhereUniqueInput
  }

  /**
   * DailyGoalTask findFirst
   */
  export type DailyGoalTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoalTask to fetch.
     */
    where?: DailyGoalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoalTasks to fetch.
     */
    orderBy?: DailyGoalTaskOrderByWithRelationInput | DailyGoalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyGoalTasks.
     */
    cursor?: DailyGoalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoalTasks.
     */
    distinct?: DailyGoalTaskScalarFieldEnum | DailyGoalTaskScalarFieldEnum[]
  }

  /**
   * DailyGoalTask findFirstOrThrow
   */
  export type DailyGoalTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoalTask to fetch.
     */
    where?: DailyGoalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoalTasks to fetch.
     */
    orderBy?: DailyGoalTaskOrderByWithRelationInput | DailyGoalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyGoalTasks.
     */
    cursor?: DailyGoalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoalTasks.
     */
    distinct?: DailyGoalTaskScalarFieldEnum | DailyGoalTaskScalarFieldEnum[]
  }

  /**
   * DailyGoalTask findMany
   */
  export type DailyGoalTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoalTasks to fetch.
     */
    where?: DailyGoalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoalTasks to fetch.
     */
    orderBy?: DailyGoalTaskOrderByWithRelationInput | DailyGoalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyGoalTasks.
     */
    cursor?: DailyGoalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoalTasks.
     */
    distinct?: DailyGoalTaskScalarFieldEnum | DailyGoalTaskScalarFieldEnum[]
  }

  /**
   * DailyGoalTask create
   */
  export type DailyGoalTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyGoalTask.
     */
    data: XOR<DailyGoalTaskCreateInput, DailyGoalTaskUncheckedCreateInput>
  }

  /**
   * DailyGoalTask createMany
   */
  export type DailyGoalTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyGoalTasks.
     */
    data: DailyGoalTaskCreateManyInput | DailyGoalTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyGoalTask createManyAndReturn
   */
  export type DailyGoalTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * The data used to create many DailyGoalTasks.
     */
    data: DailyGoalTaskCreateManyInput | DailyGoalTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyGoalTask update
   */
  export type DailyGoalTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyGoalTask.
     */
    data: XOR<DailyGoalTaskUpdateInput, DailyGoalTaskUncheckedUpdateInput>
    /**
     * Choose, which DailyGoalTask to update.
     */
    where: DailyGoalTaskWhereUniqueInput
  }

  /**
   * DailyGoalTask updateMany
   */
  export type DailyGoalTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyGoalTasks.
     */
    data: XOR<DailyGoalTaskUpdateManyMutationInput, DailyGoalTaskUncheckedUpdateManyInput>
    /**
     * Filter which DailyGoalTasks to update
     */
    where?: DailyGoalTaskWhereInput
    /**
     * Limit how many DailyGoalTasks to update.
     */
    limit?: number
  }

  /**
   * DailyGoalTask updateManyAndReturn
   */
  export type DailyGoalTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * The data used to update DailyGoalTasks.
     */
    data: XOR<DailyGoalTaskUpdateManyMutationInput, DailyGoalTaskUncheckedUpdateManyInput>
    /**
     * Filter which DailyGoalTasks to update
     */
    where?: DailyGoalTaskWhereInput
    /**
     * Limit how many DailyGoalTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyGoalTask upsert
   */
  export type DailyGoalTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyGoalTask to update in case it exists.
     */
    where: DailyGoalTaskWhereUniqueInput
    /**
     * In case the DailyGoalTask found by the `where` argument doesn't exist, create a new DailyGoalTask with this data.
     */
    create: XOR<DailyGoalTaskCreateInput, DailyGoalTaskUncheckedCreateInput>
    /**
     * In case the DailyGoalTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyGoalTaskUpdateInput, DailyGoalTaskUncheckedUpdateInput>
  }

  /**
   * DailyGoalTask delete
   */
  export type DailyGoalTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
    /**
     * Filter which DailyGoalTask to delete.
     */
    where: DailyGoalTaskWhereUniqueInput
  }

  /**
   * DailyGoalTask deleteMany
   */
  export type DailyGoalTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyGoalTasks to delete
     */
    where?: DailyGoalTaskWhereInput
    /**
     * Limit how many DailyGoalTasks to delete.
     */
    limit?: number
  }

  /**
   * DailyGoalTask without action
   */
  export type DailyGoalTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoalTask
     */
    select?: DailyGoalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoalTask
     */
    omit?: DailyGoalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalTaskInclude<ExtArgs> | null
  }


  /**
   * Model DailyReflection
   */

  export type AggregateDailyReflection = {
    _count: DailyReflectionCountAggregateOutputType | null
    _avg: DailyReflectionAvgAggregateOutputType | null
    _sum: DailyReflectionSumAggregateOutputType | null
    _min: DailyReflectionMinAggregateOutputType | null
    _max: DailyReflectionMaxAggregateOutputType | null
  }

  export type DailyReflectionAvgAggregateOutputType = {
    assessmentScore: number | null
    assessmentCorrect: number | null
    assessmentTotal: number | null
  }

  export type DailyReflectionSumAggregateOutputType = {
    assessmentScore: number | null
    assessmentCorrect: number | null
    assessmentTotal: number | null
  }

  export type DailyReflectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    date: Date | null
    content: string | null
    assessmentScore: number | null
    assessmentCorrect: number | null
    assessmentTotal: number | null
    assessedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyReflectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    classroomId: string | null
    date: Date | null
    content: string | null
    assessmentScore: number | null
    assessmentCorrect: number | null
    assessmentTotal: number | null
    assessedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyReflectionCountAggregateOutputType = {
    id: number
    userId: number
    classroomId: number
    date: number
    content: number
    assessmentScore: number
    assessmentCorrect: number
    assessmentTotal: number
    assessmentDetails: number
    assessedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyReflectionAvgAggregateInputType = {
    assessmentScore?: true
    assessmentCorrect?: true
    assessmentTotal?: true
  }

  export type DailyReflectionSumAggregateInputType = {
    assessmentScore?: true
    assessmentCorrect?: true
    assessmentTotal?: true
  }

  export type DailyReflectionMinAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    date?: true
    content?: true
    assessmentScore?: true
    assessmentCorrect?: true
    assessmentTotal?: true
    assessedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyReflectionMaxAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    date?: true
    content?: true
    assessmentScore?: true
    assessmentCorrect?: true
    assessmentTotal?: true
    assessedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyReflectionCountAggregateInputType = {
    id?: true
    userId?: true
    classroomId?: true
    date?: true
    content?: true
    assessmentScore?: true
    assessmentCorrect?: true
    assessmentTotal?: true
    assessmentDetails?: true
    assessedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyReflectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReflection to aggregate.
     */
    where?: DailyReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReflections to fetch.
     */
    orderBy?: DailyReflectionOrderByWithRelationInput | DailyReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReflections
    **/
    _count?: true | DailyReflectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReflectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReflectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReflectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReflectionMaxAggregateInputType
  }

  export type GetDailyReflectionAggregateType<T extends DailyReflectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReflection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReflection[P]>
      : GetScalarType<T[P], AggregateDailyReflection[P]>
  }




  export type DailyReflectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReflectionWhereInput
    orderBy?: DailyReflectionOrderByWithAggregationInput | DailyReflectionOrderByWithAggregationInput[]
    by: DailyReflectionScalarFieldEnum[] | DailyReflectionScalarFieldEnum
    having?: DailyReflectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReflectionCountAggregateInputType | true
    _avg?: DailyReflectionAvgAggregateInputType
    _sum?: DailyReflectionSumAggregateInputType
    _min?: DailyReflectionMinAggregateInputType
    _max?: DailyReflectionMaxAggregateInputType
  }

  export type DailyReflectionGroupByOutputType = {
    id: string
    userId: string
    classroomId: string
    date: Date
    content: string
    assessmentScore: number | null
    assessmentCorrect: number | null
    assessmentTotal: number | null
    assessmentDetails: JsonValue | null
    assessedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DailyReflectionCountAggregateOutputType | null
    _avg: DailyReflectionAvgAggregateOutputType | null
    _sum: DailyReflectionSumAggregateOutputType | null
    _min: DailyReflectionMinAggregateOutputType | null
    _max: DailyReflectionMaxAggregateOutputType | null
  }

  type GetDailyReflectionGroupByPayload<T extends DailyReflectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReflectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReflectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReflectionGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReflectionGroupByOutputType[P]>
        }
      >
    >


  export type DailyReflectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    content?: boolean
    assessmentScore?: boolean
    assessmentCorrect?: boolean
    assessmentTotal?: boolean
    assessmentDetails?: boolean
    assessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReflection"]>

  export type DailyReflectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    content?: boolean
    assessmentScore?: boolean
    assessmentCorrect?: boolean
    assessmentTotal?: boolean
    assessmentDetails?: boolean
    assessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReflection"]>

  export type DailyReflectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    content?: boolean
    assessmentScore?: boolean
    assessmentCorrect?: boolean
    assessmentTotal?: boolean
    assessmentDetails?: boolean
    assessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReflection"]>

  export type DailyReflectionSelectScalar = {
    id?: boolean
    userId?: boolean
    classroomId?: boolean
    date?: boolean
    content?: boolean
    assessmentScore?: boolean
    assessmentCorrect?: boolean
    assessmentTotal?: boolean
    assessmentDetails?: boolean
    assessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyReflectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "classroomId" | "date" | "content" | "assessmentScore" | "assessmentCorrect" | "assessmentTotal" | "assessmentDetails" | "assessedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyReflection"]>
  export type DailyReflectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type DailyReflectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type DailyReflectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $DailyReflectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReflection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      classroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      classroomId: string
      date: Date
      content: string
      assessmentScore: number | null
      assessmentCorrect: number | null
      assessmentTotal: number | null
      assessmentDetails: Prisma.JsonValue | null
      assessedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyReflection"]>
    composites: {}
  }

  type DailyReflectionGetPayload<S extends boolean | null | undefined | DailyReflectionDefaultArgs> = $Result.GetResult<Prisma.$DailyReflectionPayload, S>

  type DailyReflectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyReflectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyReflectionCountAggregateInputType | true
    }

  export interface DailyReflectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReflection'], meta: { name: 'DailyReflection' } }
    /**
     * Find zero or one DailyReflection that matches the filter.
     * @param {DailyReflectionFindUniqueArgs} args - Arguments to find a DailyReflection
     * @example
     * // Get one DailyReflection
     * const dailyReflection = await prisma.dailyReflection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReflectionFindUniqueArgs>(args: SelectSubset<T, DailyReflectionFindUniqueArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyReflection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyReflectionFindUniqueOrThrowArgs} args - Arguments to find a DailyReflection
     * @example
     * // Get one DailyReflection
     * const dailyReflection = await prisma.dailyReflection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReflectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReflectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReflection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionFindFirstArgs} args - Arguments to find a DailyReflection
     * @example
     * // Get one DailyReflection
     * const dailyReflection = await prisma.dailyReflection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReflectionFindFirstArgs>(args?: SelectSubset<T, DailyReflectionFindFirstArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReflection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionFindFirstOrThrowArgs} args - Arguments to find a DailyReflection
     * @example
     * // Get one DailyReflection
     * const dailyReflection = await prisma.dailyReflection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReflectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReflectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyReflections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReflections
     * const dailyReflections = await prisma.dailyReflection.findMany()
     * 
     * // Get first 10 DailyReflections
     * const dailyReflections = await prisma.dailyReflection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReflectionWithIdOnly = await prisma.dailyReflection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReflectionFindManyArgs>(args?: SelectSubset<T, DailyReflectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyReflection.
     * @param {DailyReflectionCreateArgs} args - Arguments to create a DailyReflection.
     * @example
     * // Create one DailyReflection
     * const DailyReflection = await prisma.dailyReflection.create({
     *   data: {
     *     // ... data to create a DailyReflection
     *   }
     * })
     * 
     */
    create<T extends DailyReflectionCreateArgs>(args: SelectSubset<T, DailyReflectionCreateArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyReflections.
     * @param {DailyReflectionCreateManyArgs} args - Arguments to create many DailyReflections.
     * @example
     * // Create many DailyReflections
     * const dailyReflection = await prisma.dailyReflection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReflectionCreateManyArgs>(args?: SelectSubset<T, DailyReflectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReflections and returns the data saved in the database.
     * @param {DailyReflectionCreateManyAndReturnArgs} args - Arguments to create many DailyReflections.
     * @example
     * // Create many DailyReflections
     * const dailyReflection = await prisma.dailyReflection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReflections and only return the `id`
     * const dailyReflectionWithIdOnly = await prisma.dailyReflection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReflectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReflectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyReflection.
     * @param {DailyReflectionDeleteArgs} args - Arguments to delete one DailyReflection.
     * @example
     * // Delete one DailyReflection
     * const DailyReflection = await prisma.dailyReflection.delete({
     *   where: {
     *     // ... filter to delete one DailyReflection
     *   }
     * })
     * 
     */
    delete<T extends DailyReflectionDeleteArgs>(args: SelectSubset<T, DailyReflectionDeleteArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyReflection.
     * @param {DailyReflectionUpdateArgs} args - Arguments to update one DailyReflection.
     * @example
     * // Update one DailyReflection
     * const dailyReflection = await prisma.dailyReflection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReflectionUpdateArgs>(args: SelectSubset<T, DailyReflectionUpdateArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyReflections.
     * @param {DailyReflectionDeleteManyArgs} args - Arguments to filter DailyReflections to delete.
     * @example
     * // Delete a few DailyReflections
     * const { count } = await prisma.dailyReflection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReflectionDeleteManyArgs>(args?: SelectSubset<T, DailyReflectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReflections
     * const dailyReflection = await prisma.dailyReflection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReflectionUpdateManyArgs>(args: SelectSubset<T, DailyReflectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReflections and returns the data updated in the database.
     * @param {DailyReflectionUpdateManyAndReturnArgs} args - Arguments to update many DailyReflections.
     * @example
     * // Update many DailyReflections
     * const dailyReflection = await prisma.dailyReflection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyReflections and only return the `id`
     * const dailyReflectionWithIdOnly = await prisma.dailyReflection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyReflectionUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyReflectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyReflection.
     * @param {DailyReflectionUpsertArgs} args - Arguments to update or create a DailyReflection.
     * @example
     * // Update or create a DailyReflection
     * const dailyReflection = await prisma.dailyReflection.upsert({
     *   create: {
     *     // ... data to create a DailyReflection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReflection we want to update
     *   }
     * })
     */
    upsert<T extends DailyReflectionUpsertArgs>(args: SelectSubset<T, DailyReflectionUpsertArgs<ExtArgs>>): Prisma__DailyReflectionClient<$Result.GetResult<Prisma.$DailyReflectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyReflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionCountArgs} args - Arguments to filter DailyReflections to count.
     * @example
     * // Count the number of DailyReflections
     * const count = await prisma.dailyReflection.count({
     *   where: {
     *     // ... the filter for the DailyReflections we want to count
     *   }
     * })
    **/
    count<T extends DailyReflectionCountArgs>(
      args?: Subset<T, DailyReflectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReflectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReflectionAggregateArgs>(args: Subset<T, DailyReflectionAggregateArgs>): Prisma.PrismaPromise<GetDailyReflectionAggregateType<T>>

    /**
     * Group by DailyReflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReflectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReflectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReflectionGroupByArgs['orderBy'] }
        : { orderBy?: DailyReflectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReflectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReflectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReflection model
   */
  readonly fields: DailyReflectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReflection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReflectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReflection model
   */
  interface DailyReflectionFieldRefs {
    readonly id: FieldRef<"DailyReflection", 'String'>
    readonly userId: FieldRef<"DailyReflection", 'String'>
    readonly classroomId: FieldRef<"DailyReflection", 'String'>
    readonly date: FieldRef<"DailyReflection", 'DateTime'>
    readonly content: FieldRef<"DailyReflection", 'String'>
    readonly assessmentScore: FieldRef<"DailyReflection", 'Int'>
    readonly assessmentCorrect: FieldRef<"DailyReflection", 'Int'>
    readonly assessmentTotal: FieldRef<"DailyReflection", 'Int'>
    readonly assessmentDetails: FieldRef<"DailyReflection", 'Json'>
    readonly assessedAt: FieldRef<"DailyReflection", 'DateTime'>
    readonly createdAt: FieldRef<"DailyReflection", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyReflection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyReflection findUnique
   */
  export type DailyReflectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * Filter, which DailyReflection to fetch.
     */
    where: DailyReflectionWhereUniqueInput
  }

  /**
   * DailyReflection findUniqueOrThrow
   */
  export type DailyReflectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * Filter, which DailyReflection to fetch.
     */
    where: DailyReflectionWhereUniqueInput
  }

  /**
   * DailyReflection findFirst
   */
  export type DailyReflectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * Filter, which DailyReflection to fetch.
     */
    where?: DailyReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReflections to fetch.
     */
    orderBy?: DailyReflectionOrderByWithRelationInput | DailyReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReflections.
     */
    cursor?: DailyReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReflections.
     */
    distinct?: DailyReflectionScalarFieldEnum | DailyReflectionScalarFieldEnum[]
  }

  /**
   * DailyReflection findFirstOrThrow
   */
  export type DailyReflectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * Filter, which DailyReflection to fetch.
     */
    where?: DailyReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReflections to fetch.
     */
    orderBy?: DailyReflectionOrderByWithRelationInput | DailyReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReflections.
     */
    cursor?: DailyReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReflections.
     */
    distinct?: DailyReflectionScalarFieldEnum | DailyReflectionScalarFieldEnum[]
  }

  /**
   * DailyReflection findMany
   */
  export type DailyReflectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * Filter, which DailyReflections to fetch.
     */
    where?: DailyReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReflections to fetch.
     */
    orderBy?: DailyReflectionOrderByWithRelationInput | DailyReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReflections.
     */
    cursor?: DailyReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReflections.
     */
    distinct?: DailyReflectionScalarFieldEnum | DailyReflectionScalarFieldEnum[]
  }

  /**
   * DailyReflection create
   */
  export type DailyReflectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReflection.
     */
    data: XOR<DailyReflectionCreateInput, DailyReflectionUncheckedCreateInput>
  }

  /**
   * DailyReflection createMany
   */
  export type DailyReflectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReflections.
     */
    data: DailyReflectionCreateManyInput | DailyReflectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReflection createManyAndReturn
   */
  export type DailyReflectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * The data used to create many DailyReflections.
     */
    data: DailyReflectionCreateManyInput | DailyReflectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReflection update
   */
  export type DailyReflectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReflection.
     */
    data: XOR<DailyReflectionUpdateInput, DailyReflectionUncheckedUpdateInput>
    /**
     * Choose, which DailyReflection to update.
     */
    where: DailyReflectionWhereUniqueInput
  }

  /**
   * DailyReflection updateMany
   */
  export type DailyReflectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReflections.
     */
    data: XOR<DailyReflectionUpdateManyMutationInput, DailyReflectionUncheckedUpdateManyInput>
    /**
     * Filter which DailyReflections to update
     */
    where?: DailyReflectionWhereInput
    /**
     * Limit how many DailyReflections to update.
     */
    limit?: number
  }

  /**
   * DailyReflection updateManyAndReturn
   */
  export type DailyReflectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * The data used to update DailyReflections.
     */
    data: XOR<DailyReflectionUpdateManyMutationInput, DailyReflectionUncheckedUpdateManyInput>
    /**
     * Filter which DailyReflections to update
     */
    where?: DailyReflectionWhereInput
    /**
     * Limit how many DailyReflections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReflection upsert
   */
  export type DailyReflectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReflection to update in case it exists.
     */
    where: DailyReflectionWhereUniqueInput
    /**
     * In case the DailyReflection found by the `where` argument doesn't exist, create a new DailyReflection with this data.
     */
    create: XOR<DailyReflectionCreateInput, DailyReflectionUncheckedCreateInput>
    /**
     * In case the DailyReflection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReflectionUpdateInput, DailyReflectionUncheckedUpdateInput>
  }

  /**
   * DailyReflection delete
   */
  export type DailyReflectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
    /**
     * Filter which DailyReflection to delete.
     */
    where: DailyReflectionWhereUniqueInput
  }

  /**
   * DailyReflection deleteMany
   */
  export type DailyReflectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReflections to delete
     */
    where?: DailyReflectionWhereInput
    /**
     * Limit how many DailyReflections to delete.
     */
    limit?: number
  }

  /**
   * DailyReflection without action
   */
  export type DailyReflectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReflection
     */
    select?: DailyReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReflection
     */
    omit?: DailyReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReflectionInclude<ExtArgs> | null
  }


  /**
   * Model ClassroomNotification
   */

  export type AggregateClassroomNotification = {
    _count: ClassroomNotificationCountAggregateOutputType | null
    _min: ClassroomNotificationMinAggregateOutputType | null
    _max: ClassroomNotificationMaxAggregateOutputType | null
  }

  export type ClassroomNotificationMinAggregateOutputType = {
    id: string | null
    classroomId: string | null
    createdById: string | null
    recipientEmail: string | null
    type: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ClassroomNotificationMaxAggregateOutputType = {
    id: string | null
    classroomId: string | null
    createdById: string | null
    recipientEmail: string | null
    type: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ClassroomNotificationCountAggregateOutputType = {
    id: number
    classroomId: number
    createdById: number
    recipientEmail: number
    type: number
    title: number
    content: number
    createdAt: number
    _all: number
  }


  export type ClassroomNotificationMinAggregateInputType = {
    id?: true
    classroomId?: true
    createdById?: true
    recipientEmail?: true
    type?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type ClassroomNotificationMaxAggregateInputType = {
    id?: true
    classroomId?: true
    createdById?: true
    recipientEmail?: true
    type?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type ClassroomNotificationCountAggregateInputType = {
    id?: true
    classroomId?: true
    createdById?: true
    recipientEmail?: true
    type?: true
    title?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ClassroomNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomNotification to aggregate.
     */
    where?: ClassroomNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotifications to fetch.
     */
    orderBy?: ClassroomNotificationOrderByWithRelationInput | ClassroomNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomNotifications
    **/
    _count?: true | ClassroomNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomNotificationMaxAggregateInputType
  }

  export type GetClassroomNotificationAggregateType<T extends ClassroomNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomNotification[P]>
      : GetScalarType<T[P], AggregateClassroomNotification[P]>
  }




  export type ClassroomNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomNotificationWhereInput
    orderBy?: ClassroomNotificationOrderByWithAggregationInput | ClassroomNotificationOrderByWithAggregationInput[]
    by: ClassroomNotificationScalarFieldEnum[] | ClassroomNotificationScalarFieldEnum
    having?: ClassroomNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomNotificationCountAggregateInputType | true
    _min?: ClassroomNotificationMinAggregateInputType
    _max?: ClassroomNotificationMaxAggregateInputType
  }

  export type ClassroomNotificationGroupByOutputType = {
    id: string
    classroomId: string
    createdById: string | null
    recipientEmail: string | null
    type: string
    title: string
    content: string
    createdAt: Date
    _count: ClassroomNotificationCountAggregateOutputType | null
    _min: ClassroomNotificationMinAggregateOutputType | null
    _max: ClassroomNotificationMaxAggregateOutputType | null
  }

  type GetClassroomNotificationGroupByPayload<T extends ClassroomNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomNotificationGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classroomId?: boolean
    createdById?: boolean
    recipientEmail?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    createdBy?: boolean | ClassroomNotification$createdByArgs<ExtArgs>
    reads?: boolean | ClassroomNotification$readsArgs<ExtArgs>
    _count?: boolean | ClassroomNotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomNotification"]>

  export type ClassroomNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classroomId?: boolean
    createdById?: boolean
    recipientEmail?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    createdBy?: boolean | ClassroomNotification$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["classroomNotification"]>

  export type ClassroomNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classroomId?: boolean
    createdById?: boolean
    recipientEmail?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    createdBy?: boolean | ClassroomNotification$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["classroomNotification"]>

  export type ClassroomNotificationSelectScalar = {
    id?: boolean
    classroomId?: boolean
    createdById?: boolean
    recipientEmail?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ClassroomNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classroomId" | "createdById" | "recipientEmail" | "type" | "title" | "content" | "createdAt", ExtArgs["result"]["classroomNotification"]>
  export type ClassroomNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    createdBy?: boolean | ClassroomNotification$createdByArgs<ExtArgs>
    reads?: boolean | ClassroomNotification$readsArgs<ExtArgs>
    _count?: boolean | ClassroomNotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    createdBy?: boolean | ClassroomNotification$createdByArgs<ExtArgs>
  }
  export type ClassroomNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    createdBy?: boolean | ClassroomNotification$createdByArgs<ExtArgs>
  }

  export type $ClassroomNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomNotification"
    objects: {
      classroom: Prisma.$ClassroomPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      reads: Prisma.$ClassroomNotificationReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classroomId: string
      createdById: string | null
      recipientEmail: string | null
      type: string
      title: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["classroomNotification"]>
    composites: {}
  }

  type ClassroomNotificationGetPayload<S extends boolean | null | undefined | ClassroomNotificationDefaultArgs> = $Result.GetResult<Prisma.$ClassroomNotificationPayload, S>

  type ClassroomNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomNotificationCountAggregateInputType | true
    }

  export interface ClassroomNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomNotification'], meta: { name: 'ClassroomNotification' } }
    /**
     * Find zero or one ClassroomNotification that matches the filter.
     * @param {ClassroomNotificationFindUniqueArgs} args - Arguments to find a ClassroomNotification
     * @example
     * // Get one ClassroomNotification
     * const classroomNotification = await prisma.classroomNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomNotificationFindUniqueArgs>(args: SelectSubset<T, ClassroomNotificationFindUniqueArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomNotificationFindUniqueOrThrowArgs} args - Arguments to find a ClassroomNotification
     * @example
     * // Get one ClassroomNotification
     * const classroomNotification = await prisma.classroomNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationFindFirstArgs} args - Arguments to find a ClassroomNotification
     * @example
     * // Get one ClassroomNotification
     * const classroomNotification = await prisma.classroomNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomNotificationFindFirstArgs>(args?: SelectSubset<T, ClassroomNotificationFindFirstArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationFindFirstOrThrowArgs} args - Arguments to find a ClassroomNotification
     * @example
     * // Get one ClassroomNotification
     * const classroomNotification = await prisma.classroomNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomNotifications
     * const classroomNotifications = await prisma.classroomNotification.findMany()
     * 
     * // Get first 10 ClassroomNotifications
     * const classroomNotifications = await prisma.classroomNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomNotificationWithIdOnly = await prisma.classroomNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomNotificationFindManyArgs>(args?: SelectSubset<T, ClassroomNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomNotification.
     * @param {ClassroomNotificationCreateArgs} args - Arguments to create a ClassroomNotification.
     * @example
     * // Create one ClassroomNotification
     * const ClassroomNotification = await prisma.classroomNotification.create({
     *   data: {
     *     // ... data to create a ClassroomNotification
     *   }
     * })
     * 
     */
    create<T extends ClassroomNotificationCreateArgs>(args: SelectSubset<T, ClassroomNotificationCreateArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomNotifications.
     * @param {ClassroomNotificationCreateManyArgs} args - Arguments to create many ClassroomNotifications.
     * @example
     * // Create many ClassroomNotifications
     * const classroomNotification = await prisma.classroomNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomNotificationCreateManyArgs>(args?: SelectSubset<T, ClassroomNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomNotifications and returns the data saved in the database.
     * @param {ClassroomNotificationCreateManyAndReturnArgs} args - Arguments to create many ClassroomNotifications.
     * @example
     * // Create many ClassroomNotifications
     * const classroomNotification = await prisma.classroomNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomNotifications and only return the `id`
     * const classroomNotificationWithIdOnly = await prisma.classroomNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomNotification.
     * @param {ClassroomNotificationDeleteArgs} args - Arguments to delete one ClassroomNotification.
     * @example
     * // Delete one ClassroomNotification
     * const ClassroomNotification = await prisma.classroomNotification.delete({
     *   where: {
     *     // ... filter to delete one ClassroomNotification
     *   }
     * })
     * 
     */
    delete<T extends ClassroomNotificationDeleteArgs>(args: SelectSubset<T, ClassroomNotificationDeleteArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomNotification.
     * @param {ClassroomNotificationUpdateArgs} args - Arguments to update one ClassroomNotification.
     * @example
     * // Update one ClassroomNotification
     * const classroomNotification = await prisma.classroomNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomNotificationUpdateArgs>(args: SelectSubset<T, ClassroomNotificationUpdateArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomNotifications.
     * @param {ClassroomNotificationDeleteManyArgs} args - Arguments to filter ClassroomNotifications to delete.
     * @example
     * // Delete a few ClassroomNotifications
     * const { count } = await prisma.classroomNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomNotificationDeleteManyArgs>(args?: SelectSubset<T, ClassroomNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomNotifications
     * const classroomNotification = await prisma.classroomNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomNotificationUpdateManyArgs>(args: SelectSubset<T, ClassroomNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomNotifications and returns the data updated in the database.
     * @param {ClassroomNotificationUpdateManyAndReturnArgs} args - Arguments to update many ClassroomNotifications.
     * @example
     * // Update many ClassroomNotifications
     * const classroomNotification = await prisma.classroomNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomNotifications and only return the `id`
     * const classroomNotificationWithIdOnly = await prisma.classroomNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomNotification.
     * @param {ClassroomNotificationUpsertArgs} args - Arguments to update or create a ClassroomNotification.
     * @example
     * // Update or create a ClassroomNotification
     * const classroomNotification = await prisma.classroomNotification.upsert({
     *   create: {
     *     // ... data to create a ClassroomNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomNotification we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomNotificationUpsertArgs>(args: SelectSubset<T, ClassroomNotificationUpsertArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationCountArgs} args - Arguments to filter ClassroomNotifications to count.
     * @example
     * // Count the number of ClassroomNotifications
     * const count = await prisma.classroomNotification.count({
     *   where: {
     *     // ... the filter for the ClassroomNotifications we want to count
     *   }
     * })
    **/
    count<T extends ClassroomNotificationCountArgs>(
      args?: Subset<T, ClassroomNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomNotificationAggregateArgs>(args: Subset<T, ClassroomNotificationAggregateArgs>): Prisma.PrismaPromise<GetClassroomNotificationAggregateType<T>>

    /**
     * Group by ClassroomNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomNotificationGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomNotification model
   */
  readonly fields: ClassroomNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends ClassroomNotification$createdByArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomNotification$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reads<T extends ClassroomNotification$readsArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomNotification$readsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassroomNotification model
   */
  interface ClassroomNotificationFieldRefs {
    readonly id: FieldRef<"ClassroomNotification", 'String'>
    readonly classroomId: FieldRef<"ClassroomNotification", 'String'>
    readonly createdById: FieldRef<"ClassroomNotification", 'String'>
    readonly recipientEmail: FieldRef<"ClassroomNotification", 'String'>
    readonly type: FieldRef<"ClassroomNotification", 'String'>
    readonly title: FieldRef<"ClassroomNotification", 'String'>
    readonly content: FieldRef<"ClassroomNotification", 'String'>
    readonly createdAt: FieldRef<"ClassroomNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomNotification findUnique
   */
  export type ClassroomNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotification to fetch.
     */
    where: ClassroomNotificationWhereUniqueInput
  }

  /**
   * ClassroomNotification findUniqueOrThrow
   */
  export type ClassroomNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotification to fetch.
     */
    where: ClassroomNotificationWhereUniqueInput
  }

  /**
   * ClassroomNotification findFirst
   */
  export type ClassroomNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotification to fetch.
     */
    where?: ClassroomNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotifications to fetch.
     */
    orderBy?: ClassroomNotificationOrderByWithRelationInput | ClassroomNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomNotifications.
     */
    cursor?: ClassroomNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomNotifications.
     */
    distinct?: ClassroomNotificationScalarFieldEnum | ClassroomNotificationScalarFieldEnum[]
  }

  /**
   * ClassroomNotification findFirstOrThrow
   */
  export type ClassroomNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotification to fetch.
     */
    where?: ClassroomNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotifications to fetch.
     */
    orderBy?: ClassroomNotificationOrderByWithRelationInput | ClassroomNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomNotifications.
     */
    cursor?: ClassroomNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomNotifications.
     */
    distinct?: ClassroomNotificationScalarFieldEnum | ClassroomNotificationScalarFieldEnum[]
  }

  /**
   * ClassroomNotification findMany
   */
  export type ClassroomNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotifications to fetch.
     */
    where?: ClassroomNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotifications to fetch.
     */
    orderBy?: ClassroomNotificationOrderByWithRelationInput | ClassroomNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomNotifications.
     */
    cursor?: ClassroomNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomNotifications.
     */
    distinct?: ClassroomNotificationScalarFieldEnum | ClassroomNotificationScalarFieldEnum[]
  }

  /**
   * ClassroomNotification create
   */
  export type ClassroomNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomNotification.
     */
    data: XOR<ClassroomNotificationCreateInput, ClassroomNotificationUncheckedCreateInput>
  }

  /**
   * ClassroomNotification createMany
   */
  export type ClassroomNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomNotifications.
     */
    data: ClassroomNotificationCreateManyInput | ClassroomNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomNotification createManyAndReturn
   */
  export type ClassroomNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomNotifications.
     */
    data: ClassroomNotificationCreateManyInput | ClassroomNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomNotification update
   */
  export type ClassroomNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomNotification.
     */
    data: XOR<ClassroomNotificationUpdateInput, ClassroomNotificationUncheckedUpdateInput>
    /**
     * Choose, which ClassroomNotification to update.
     */
    where: ClassroomNotificationWhereUniqueInput
  }

  /**
   * ClassroomNotification updateMany
   */
  export type ClassroomNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomNotifications.
     */
    data: XOR<ClassroomNotificationUpdateManyMutationInput, ClassroomNotificationUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomNotifications to update
     */
    where?: ClassroomNotificationWhereInput
    /**
     * Limit how many ClassroomNotifications to update.
     */
    limit?: number
  }

  /**
   * ClassroomNotification updateManyAndReturn
   */
  export type ClassroomNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomNotifications.
     */
    data: XOR<ClassroomNotificationUpdateManyMutationInput, ClassroomNotificationUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomNotifications to update
     */
    where?: ClassroomNotificationWhereInput
    /**
     * Limit how many ClassroomNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomNotification upsert
   */
  export type ClassroomNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomNotification to update in case it exists.
     */
    where: ClassroomNotificationWhereUniqueInput
    /**
     * In case the ClassroomNotification found by the `where` argument doesn't exist, create a new ClassroomNotification with this data.
     */
    create: XOR<ClassroomNotificationCreateInput, ClassroomNotificationUncheckedCreateInput>
    /**
     * In case the ClassroomNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomNotificationUpdateInput, ClassroomNotificationUncheckedUpdateInput>
  }

  /**
   * ClassroomNotification delete
   */
  export type ClassroomNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
    /**
     * Filter which ClassroomNotification to delete.
     */
    where: ClassroomNotificationWhereUniqueInput
  }

  /**
   * ClassroomNotification deleteMany
   */
  export type ClassroomNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomNotifications to delete
     */
    where?: ClassroomNotificationWhereInput
    /**
     * Limit how many ClassroomNotifications to delete.
     */
    limit?: number
  }

  /**
   * ClassroomNotification.createdBy
   */
  export type ClassroomNotification$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ClassroomNotification.reads
   */
  export type ClassroomNotification$readsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    where?: ClassroomNotificationReadWhereInput
    orderBy?: ClassroomNotificationReadOrderByWithRelationInput | ClassroomNotificationReadOrderByWithRelationInput[]
    cursor?: ClassroomNotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomNotificationReadScalarFieldEnum | ClassroomNotificationReadScalarFieldEnum[]
  }

  /**
   * ClassroomNotification without action
   */
  export type ClassroomNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotification
     */
    select?: ClassroomNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotification
     */
    omit?: ClassroomNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationInclude<ExtArgs> | null
  }


  /**
   * Model ClassroomNotificationRead
   */

  export type AggregateClassroomNotificationRead = {
    _count: ClassroomNotificationReadCountAggregateOutputType | null
    _min: ClassroomNotificationReadMinAggregateOutputType | null
    _max: ClassroomNotificationReadMaxAggregateOutputType | null
  }

  export type ClassroomNotificationReadMinAggregateOutputType = {
    notificationId: string | null
    userId: string | null
    readAt: Date | null
  }

  export type ClassroomNotificationReadMaxAggregateOutputType = {
    notificationId: string | null
    userId: string | null
    readAt: Date | null
  }

  export type ClassroomNotificationReadCountAggregateOutputType = {
    notificationId: number
    userId: number
    readAt: number
    _all: number
  }


  export type ClassroomNotificationReadMinAggregateInputType = {
    notificationId?: true
    userId?: true
    readAt?: true
  }

  export type ClassroomNotificationReadMaxAggregateInputType = {
    notificationId?: true
    userId?: true
    readAt?: true
  }

  export type ClassroomNotificationReadCountAggregateInputType = {
    notificationId?: true
    userId?: true
    readAt?: true
    _all?: true
  }

  export type ClassroomNotificationReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomNotificationRead to aggregate.
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotificationReads to fetch.
     */
    orderBy?: ClassroomNotificationReadOrderByWithRelationInput | ClassroomNotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomNotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomNotificationReads
    **/
    _count?: true | ClassroomNotificationReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomNotificationReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomNotificationReadMaxAggregateInputType
  }

  export type GetClassroomNotificationReadAggregateType<T extends ClassroomNotificationReadAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomNotificationRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomNotificationRead[P]>
      : GetScalarType<T[P], AggregateClassroomNotificationRead[P]>
  }




  export type ClassroomNotificationReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomNotificationReadWhereInput
    orderBy?: ClassroomNotificationReadOrderByWithAggregationInput | ClassroomNotificationReadOrderByWithAggregationInput[]
    by: ClassroomNotificationReadScalarFieldEnum[] | ClassroomNotificationReadScalarFieldEnum
    having?: ClassroomNotificationReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomNotificationReadCountAggregateInputType | true
    _min?: ClassroomNotificationReadMinAggregateInputType
    _max?: ClassroomNotificationReadMaxAggregateInputType
  }

  export type ClassroomNotificationReadGroupByOutputType = {
    notificationId: string
    userId: string
    readAt: Date
    _count: ClassroomNotificationReadCountAggregateOutputType | null
    _min: ClassroomNotificationReadMinAggregateOutputType | null
    _max: ClassroomNotificationReadMaxAggregateOutputType | null
  }

  type GetClassroomNotificationReadGroupByPayload<T extends ClassroomNotificationReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomNotificationReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomNotificationReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomNotificationReadGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomNotificationReadGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomNotificationReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
    notification?: boolean | ClassroomNotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomNotificationRead"]>

  export type ClassroomNotificationReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
    notification?: boolean | ClassroomNotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomNotificationRead"]>

  export type ClassroomNotificationReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
    notification?: boolean | ClassroomNotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomNotificationRead"]>

  export type ClassroomNotificationReadSelectScalar = {
    notificationId?: boolean
    userId?: boolean
    readAt?: boolean
  }

  export type ClassroomNotificationReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notificationId" | "userId" | "readAt", ExtArgs["result"]["classroomNotificationRead"]>
  export type ClassroomNotificationReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | ClassroomNotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassroomNotificationReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | ClassroomNotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassroomNotificationReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | ClassroomNotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassroomNotificationReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomNotificationRead"
    objects: {
      notification: Prisma.$ClassroomNotificationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notificationId: string
      userId: string
      readAt: Date
    }, ExtArgs["result"]["classroomNotificationRead"]>
    composites: {}
  }

  type ClassroomNotificationReadGetPayload<S extends boolean | null | undefined | ClassroomNotificationReadDefaultArgs> = $Result.GetResult<Prisma.$ClassroomNotificationReadPayload, S>

  type ClassroomNotificationReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomNotificationReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomNotificationReadCountAggregateInputType | true
    }

  export interface ClassroomNotificationReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomNotificationRead'], meta: { name: 'ClassroomNotificationRead' } }
    /**
     * Find zero or one ClassroomNotificationRead that matches the filter.
     * @param {ClassroomNotificationReadFindUniqueArgs} args - Arguments to find a ClassroomNotificationRead
     * @example
     * // Get one ClassroomNotificationRead
     * const classroomNotificationRead = await prisma.classroomNotificationRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomNotificationReadFindUniqueArgs>(args: SelectSubset<T, ClassroomNotificationReadFindUniqueArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomNotificationRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomNotificationReadFindUniqueOrThrowArgs} args - Arguments to find a ClassroomNotificationRead
     * @example
     * // Get one ClassroomNotificationRead
     * const classroomNotificationRead = await prisma.classroomNotificationRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomNotificationReadFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomNotificationReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomNotificationRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadFindFirstArgs} args - Arguments to find a ClassroomNotificationRead
     * @example
     * // Get one ClassroomNotificationRead
     * const classroomNotificationRead = await prisma.classroomNotificationRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomNotificationReadFindFirstArgs>(args?: SelectSubset<T, ClassroomNotificationReadFindFirstArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomNotificationRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadFindFirstOrThrowArgs} args - Arguments to find a ClassroomNotificationRead
     * @example
     * // Get one ClassroomNotificationRead
     * const classroomNotificationRead = await prisma.classroomNotificationRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomNotificationReadFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomNotificationReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomNotificationReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomNotificationReads
     * const classroomNotificationReads = await prisma.classroomNotificationRead.findMany()
     * 
     * // Get first 10 ClassroomNotificationReads
     * const classroomNotificationReads = await prisma.classroomNotificationRead.findMany({ take: 10 })
     * 
     * // Only select the `notificationId`
     * const classroomNotificationReadWithNotificationIdOnly = await prisma.classroomNotificationRead.findMany({ select: { notificationId: true } })
     * 
     */
    findMany<T extends ClassroomNotificationReadFindManyArgs>(args?: SelectSubset<T, ClassroomNotificationReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomNotificationRead.
     * @param {ClassroomNotificationReadCreateArgs} args - Arguments to create a ClassroomNotificationRead.
     * @example
     * // Create one ClassroomNotificationRead
     * const ClassroomNotificationRead = await prisma.classroomNotificationRead.create({
     *   data: {
     *     // ... data to create a ClassroomNotificationRead
     *   }
     * })
     * 
     */
    create<T extends ClassroomNotificationReadCreateArgs>(args: SelectSubset<T, ClassroomNotificationReadCreateArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomNotificationReads.
     * @param {ClassroomNotificationReadCreateManyArgs} args - Arguments to create many ClassroomNotificationReads.
     * @example
     * // Create many ClassroomNotificationReads
     * const classroomNotificationRead = await prisma.classroomNotificationRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomNotificationReadCreateManyArgs>(args?: SelectSubset<T, ClassroomNotificationReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomNotificationReads and returns the data saved in the database.
     * @param {ClassroomNotificationReadCreateManyAndReturnArgs} args - Arguments to create many ClassroomNotificationReads.
     * @example
     * // Create many ClassroomNotificationReads
     * const classroomNotificationRead = await prisma.classroomNotificationRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomNotificationReads and only return the `notificationId`
     * const classroomNotificationReadWithNotificationIdOnly = await prisma.classroomNotificationRead.createManyAndReturn({
     *   select: { notificationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomNotificationReadCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomNotificationReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomNotificationRead.
     * @param {ClassroomNotificationReadDeleteArgs} args - Arguments to delete one ClassroomNotificationRead.
     * @example
     * // Delete one ClassroomNotificationRead
     * const ClassroomNotificationRead = await prisma.classroomNotificationRead.delete({
     *   where: {
     *     // ... filter to delete one ClassroomNotificationRead
     *   }
     * })
     * 
     */
    delete<T extends ClassroomNotificationReadDeleteArgs>(args: SelectSubset<T, ClassroomNotificationReadDeleteArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomNotificationRead.
     * @param {ClassroomNotificationReadUpdateArgs} args - Arguments to update one ClassroomNotificationRead.
     * @example
     * // Update one ClassroomNotificationRead
     * const classroomNotificationRead = await prisma.classroomNotificationRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomNotificationReadUpdateArgs>(args: SelectSubset<T, ClassroomNotificationReadUpdateArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomNotificationReads.
     * @param {ClassroomNotificationReadDeleteManyArgs} args - Arguments to filter ClassroomNotificationReads to delete.
     * @example
     * // Delete a few ClassroomNotificationReads
     * const { count } = await prisma.classroomNotificationRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomNotificationReadDeleteManyArgs>(args?: SelectSubset<T, ClassroomNotificationReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomNotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomNotificationReads
     * const classroomNotificationRead = await prisma.classroomNotificationRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomNotificationReadUpdateManyArgs>(args: SelectSubset<T, ClassroomNotificationReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomNotificationReads and returns the data updated in the database.
     * @param {ClassroomNotificationReadUpdateManyAndReturnArgs} args - Arguments to update many ClassroomNotificationReads.
     * @example
     * // Update many ClassroomNotificationReads
     * const classroomNotificationRead = await prisma.classroomNotificationRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomNotificationReads and only return the `notificationId`
     * const classroomNotificationReadWithNotificationIdOnly = await prisma.classroomNotificationRead.updateManyAndReturn({
     *   select: { notificationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomNotificationReadUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomNotificationReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomNotificationRead.
     * @param {ClassroomNotificationReadUpsertArgs} args - Arguments to update or create a ClassroomNotificationRead.
     * @example
     * // Update or create a ClassroomNotificationRead
     * const classroomNotificationRead = await prisma.classroomNotificationRead.upsert({
     *   create: {
     *     // ... data to create a ClassroomNotificationRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomNotificationRead we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomNotificationReadUpsertArgs>(args: SelectSubset<T, ClassroomNotificationReadUpsertArgs<ExtArgs>>): Prisma__ClassroomNotificationReadClient<$Result.GetResult<Prisma.$ClassroomNotificationReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomNotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadCountArgs} args - Arguments to filter ClassroomNotificationReads to count.
     * @example
     * // Count the number of ClassroomNotificationReads
     * const count = await prisma.classroomNotificationRead.count({
     *   where: {
     *     // ... the filter for the ClassroomNotificationReads we want to count
     *   }
     * })
    **/
    count<T extends ClassroomNotificationReadCountArgs>(
      args?: Subset<T, ClassroomNotificationReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomNotificationReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomNotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomNotificationReadAggregateArgs>(args: Subset<T, ClassroomNotificationReadAggregateArgs>): Prisma.PrismaPromise<GetClassroomNotificationReadAggregateType<T>>

    /**
     * Group by ClassroomNotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomNotificationReadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomNotificationReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomNotificationReadGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomNotificationReadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomNotificationReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomNotificationReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomNotificationRead model
   */
  readonly fields: ClassroomNotificationReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomNotificationRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomNotificationReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends ClassroomNotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomNotificationDefaultArgs<ExtArgs>>): Prisma__ClassroomNotificationClient<$Result.GetResult<Prisma.$ClassroomNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassroomNotificationRead model
   */
  interface ClassroomNotificationReadFieldRefs {
    readonly notificationId: FieldRef<"ClassroomNotificationRead", 'String'>
    readonly userId: FieldRef<"ClassroomNotificationRead", 'String'>
    readonly readAt: FieldRef<"ClassroomNotificationRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomNotificationRead findUnique
   */
  export type ClassroomNotificationReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotificationRead to fetch.
     */
    where: ClassroomNotificationReadWhereUniqueInput
  }

  /**
   * ClassroomNotificationRead findUniqueOrThrow
   */
  export type ClassroomNotificationReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotificationRead to fetch.
     */
    where: ClassroomNotificationReadWhereUniqueInput
  }

  /**
   * ClassroomNotificationRead findFirst
   */
  export type ClassroomNotificationReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotificationRead to fetch.
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotificationReads to fetch.
     */
    orderBy?: ClassroomNotificationReadOrderByWithRelationInput | ClassroomNotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomNotificationReads.
     */
    cursor?: ClassroomNotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomNotificationReads.
     */
    distinct?: ClassroomNotificationReadScalarFieldEnum | ClassroomNotificationReadScalarFieldEnum[]
  }

  /**
   * ClassroomNotificationRead findFirstOrThrow
   */
  export type ClassroomNotificationReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotificationRead to fetch.
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotificationReads to fetch.
     */
    orderBy?: ClassroomNotificationReadOrderByWithRelationInput | ClassroomNotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomNotificationReads.
     */
    cursor?: ClassroomNotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomNotificationReads.
     */
    distinct?: ClassroomNotificationReadScalarFieldEnum | ClassroomNotificationReadScalarFieldEnum[]
  }

  /**
   * ClassroomNotificationRead findMany
   */
  export type ClassroomNotificationReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomNotificationReads to fetch.
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomNotificationReads to fetch.
     */
    orderBy?: ClassroomNotificationReadOrderByWithRelationInput | ClassroomNotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomNotificationReads.
     */
    cursor?: ClassroomNotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomNotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomNotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomNotificationReads.
     */
    distinct?: ClassroomNotificationReadScalarFieldEnum | ClassroomNotificationReadScalarFieldEnum[]
  }

  /**
   * ClassroomNotificationRead create
   */
  export type ClassroomNotificationReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomNotificationRead.
     */
    data: XOR<ClassroomNotificationReadCreateInput, ClassroomNotificationReadUncheckedCreateInput>
  }

  /**
   * ClassroomNotificationRead createMany
   */
  export type ClassroomNotificationReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomNotificationReads.
     */
    data: ClassroomNotificationReadCreateManyInput | ClassroomNotificationReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomNotificationRead createManyAndReturn
   */
  export type ClassroomNotificationReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomNotificationReads.
     */
    data: ClassroomNotificationReadCreateManyInput | ClassroomNotificationReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomNotificationRead update
   */
  export type ClassroomNotificationReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomNotificationRead.
     */
    data: XOR<ClassroomNotificationReadUpdateInput, ClassroomNotificationReadUncheckedUpdateInput>
    /**
     * Choose, which ClassroomNotificationRead to update.
     */
    where: ClassroomNotificationReadWhereUniqueInput
  }

  /**
   * ClassroomNotificationRead updateMany
   */
  export type ClassroomNotificationReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomNotificationReads.
     */
    data: XOR<ClassroomNotificationReadUpdateManyMutationInput, ClassroomNotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomNotificationReads to update
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * Limit how many ClassroomNotificationReads to update.
     */
    limit?: number
  }

  /**
   * ClassroomNotificationRead updateManyAndReturn
   */
  export type ClassroomNotificationReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomNotificationReads.
     */
    data: XOR<ClassroomNotificationReadUpdateManyMutationInput, ClassroomNotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomNotificationReads to update
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * Limit how many ClassroomNotificationReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomNotificationRead upsert
   */
  export type ClassroomNotificationReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomNotificationRead to update in case it exists.
     */
    where: ClassroomNotificationReadWhereUniqueInput
    /**
     * In case the ClassroomNotificationRead found by the `where` argument doesn't exist, create a new ClassroomNotificationRead with this data.
     */
    create: XOR<ClassroomNotificationReadCreateInput, ClassroomNotificationReadUncheckedCreateInput>
    /**
     * In case the ClassroomNotificationRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomNotificationReadUpdateInput, ClassroomNotificationReadUncheckedUpdateInput>
  }

  /**
   * ClassroomNotificationRead delete
   */
  export type ClassroomNotificationReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
    /**
     * Filter which ClassroomNotificationRead to delete.
     */
    where: ClassroomNotificationReadWhereUniqueInput
  }

  /**
   * ClassroomNotificationRead deleteMany
   */
  export type ClassroomNotificationReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomNotificationReads to delete
     */
    where?: ClassroomNotificationReadWhereInput
    /**
     * Limit how many ClassroomNotificationReads to delete.
     */
    limit?: number
  }

  /**
   * ClassroomNotificationRead without action
   */
  export type ClassroomNotificationReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomNotificationRead
     */
    select?: ClassroomNotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomNotificationRead
     */
    omit?: ClassroomNotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomNotificationReadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    passwordHash: 'passwordHash',
    name: 'name',
    email: 'email',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    joinCode: 'joinCode',
    hostId: 'hostId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dailyGoal: 'dailyGoal',
    goalSettingTime: 'goalSettingTime',
    reflectionTime: 'reflectionTime',
    tasksPerDay: 'tasksPerDay',
    dayParts: 'dayParts',
    timezone: 'timezone',
    allowLateGoalEdits: 'allowLateGoalEdits'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const ClassroomMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    classroomId: 'classroomId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type ClassroomMemberScalarFieldEnum = (typeof ClassroomMemberScalarFieldEnum)[keyof typeof ClassroomMemberScalarFieldEnum]


  export const ClassroomJoinRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    classroomId: 'classroomId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassroomJoinRequestScalarFieldEnum = (typeof ClassroomJoinRequestScalarFieldEnum)[keyof typeof ClassroomJoinRequestScalarFieldEnum]


  export const DailyGoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    classroomId: 'classroomId',
    date: 'date',
    statement: 'statement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyGoalScalarFieldEnum = (typeof DailyGoalScalarFieldEnum)[keyof typeof DailyGoalScalarFieldEnum]


  export const DailyGoalTaskScalarFieldEnum: {
    id: 'id',
    dailyGoalId: 'dailyGoalId',
    title: 'title',
    completed: 'completed',
    createdAt: 'createdAt'
  };

  export type DailyGoalTaskScalarFieldEnum = (typeof DailyGoalTaskScalarFieldEnum)[keyof typeof DailyGoalTaskScalarFieldEnum]


  export const DailyReflectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    classroomId: 'classroomId',
    date: 'date',
    content: 'content',
    assessmentScore: 'assessmentScore',
    assessmentCorrect: 'assessmentCorrect',
    assessmentTotal: 'assessmentTotal',
    assessmentDetails: 'assessmentDetails',
    assessedAt: 'assessedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyReflectionScalarFieldEnum = (typeof DailyReflectionScalarFieldEnum)[keyof typeof DailyReflectionScalarFieldEnum]


  export const ClassroomNotificationScalarFieldEnum: {
    id: 'id',
    classroomId: 'classroomId',
    createdById: 'createdById',
    recipientEmail: 'recipientEmail',
    type: 'type',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ClassroomNotificationScalarFieldEnum = (typeof ClassroomNotificationScalarFieldEnum)[keyof typeof ClassroomNotificationScalarFieldEnum]


  export const ClassroomNotificationReadScalarFieldEnum: {
    notificationId: 'notificationId',
    userId: 'userId',
    readAt: 'readAt'
  };

  export type ClassroomNotificationReadScalarFieldEnum = (typeof ClassroomNotificationReadScalarFieldEnum)[keyof typeof ClassroomNotificationReadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MemberRole'
   */
  export type EnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole'>
    


  /**
   * Reference to a field of type 'MemberRole[]'
   */
  export type ListEnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole[]'>
    


  /**
   * Reference to a field of type 'JoinRequestStatus'
   */
  export type EnumJoinRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JoinRequestStatus'>
    


  /**
   * Reference to a field of type 'JoinRequestStatus[]'
   */
  export type ListEnumJoinRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JoinRequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hostedClassrooms?: ClassroomListRelationFilter
    memberships?: ClassroomMemberListRelationFilter
    classroomJoinRequests?: ClassroomJoinRequestListRelationFilter
    dailyGoals?: DailyGoalListRelationFilter
    dailyReflections?: DailyReflectionListRelationFilter
    notificationsCreated?: ClassroomNotificationListRelationFilter
    notificationReads?: ClassroomNotificationReadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostedClassrooms?: ClassroomOrderByRelationAggregateInput
    memberships?: ClassroomMemberOrderByRelationAggregateInput
    classroomJoinRequests?: ClassroomJoinRequestOrderByRelationAggregateInput
    dailyGoals?: DailyGoalOrderByRelationAggregateInput
    dailyReflections?: DailyReflectionOrderByRelationAggregateInput
    notificationsCreated?: ClassroomNotificationOrderByRelationAggregateInput
    notificationReads?: ClassroomNotificationReadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hostedClassrooms?: ClassroomListRelationFilter
    memberships?: ClassroomMemberListRelationFilter
    classroomJoinRequests?: ClassroomJoinRequestListRelationFilter
    dailyGoals?: DailyGoalListRelationFilter
    dailyReflections?: DailyReflectionListRelationFilter
    notificationsCreated?: ClassroomNotificationListRelationFilter
    notificationReads?: ClassroomNotificationReadListRelationFilter
  }, "id" | "googleId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    description?: StringNullableFilter<"Classroom"> | string | null
    joinCode?: StringFilter<"Classroom"> | string
    hostId?: StringFilter<"Classroom"> | string
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    dailyGoal?: StringNullableFilter<"Classroom"> | string | null
    goalSettingTime?: StringNullableFilter<"Classroom"> | string | null
    reflectionTime?: StringNullableFilter<"Classroom"> | string | null
    tasksPerDay?: IntFilter<"Classroom"> | number
    dayParts?: JsonNullableFilter<"Classroom">
    timezone?: StringFilter<"Classroom"> | string
    allowLateGoalEdits?: BoolFilter<"Classroom"> | boolean
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ClassroomMemberListRelationFilter
    joinRequests?: ClassroomJoinRequestListRelationFilter
    dailyGoals?: DailyGoalListRelationFilter
    dailyReflections?: DailyReflectionListRelationFilter
    notifications?: ClassroomNotificationListRelationFilter
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    joinCode?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyGoal?: SortOrderInput | SortOrder
    goalSettingTime?: SortOrderInput | SortOrder
    reflectionTime?: SortOrderInput | SortOrder
    tasksPerDay?: SortOrder
    dayParts?: SortOrderInput | SortOrder
    timezone?: SortOrder
    allowLateGoalEdits?: SortOrder
    host?: UserOrderByWithRelationInput
    members?: ClassroomMemberOrderByRelationAggregateInput
    joinRequests?: ClassroomJoinRequestOrderByRelationAggregateInput
    dailyGoals?: DailyGoalOrderByRelationAggregateInput
    dailyReflections?: DailyReflectionOrderByRelationAggregateInput
    notifications?: ClassroomNotificationOrderByRelationAggregateInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    joinCode?: string
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    name?: StringFilter<"Classroom"> | string
    description?: StringNullableFilter<"Classroom"> | string | null
    hostId?: StringFilter<"Classroom"> | string
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    dailyGoal?: StringNullableFilter<"Classroom"> | string | null
    goalSettingTime?: StringNullableFilter<"Classroom"> | string | null
    reflectionTime?: StringNullableFilter<"Classroom"> | string | null
    tasksPerDay?: IntFilter<"Classroom"> | number
    dayParts?: JsonNullableFilter<"Classroom">
    timezone?: StringFilter<"Classroom"> | string
    allowLateGoalEdits?: BoolFilter<"Classroom"> | boolean
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ClassroomMemberListRelationFilter
    joinRequests?: ClassroomJoinRequestListRelationFilter
    dailyGoals?: DailyGoalListRelationFilter
    dailyReflections?: DailyReflectionListRelationFilter
    notifications?: ClassroomNotificationListRelationFilter
  }, "id" | "joinCode">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    joinCode?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyGoal?: SortOrderInput | SortOrder
    goalSettingTime?: SortOrderInput | SortOrder
    reflectionTime?: SortOrderInput | SortOrder
    tasksPerDay?: SortOrder
    dayParts?: SortOrderInput | SortOrder
    timezone?: SortOrder
    allowLateGoalEdits?: SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _avg?: ClassroomAvgOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
    _sum?: ClassroomSumOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classroom"> | string
    name?: StringWithAggregatesFilter<"Classroom"> | string
    description?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
    joinCode?: StringWithAggregatesFilter<"Classroom"> | string
    hostId?: StringWithAggregatesFilter<"Classroom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
    dailyGoal?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
    goalSettingTime?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
    reflectionTime?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
    tasksPerDay?: IntWithAggregatesFilter<"Classroom"> | number
    dayParts?: JsonNullableWithAggregatesFilter<"Classroom">
    timezone?: StringWithAggregatesFilter<"Classroom"> | string
    allowLateGoalEdits?: BoolWithAggregatesFilter<"Classroom"> | boolean
  }

  export type ClassroomMemberWhereInput = {
    AND?: ClassroomMemberWhereInput | ClassroomMemberWhereInput[]
    OR?: ClassroomMemberWhereInput[]
    NOT?: ClassroomMemberWhereInput | ClassroomMemberWhereInput[]
    id?: StringFilter<"ClassroomMember"> | string
    userId?: StringFilter<"ClassroomMember"> | string
    classroomId?: StringFilter<"ClassroomMember"> | string
    role?: EnumMemberRoleFilter<"ClassroomMember"> | $Enums.MemberRole
    joinedAt?: DateTimeFilter<"ClassroomMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type ClassroomMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    classroom?: ClassroomOrderByWithRelationInput
  }

  export type ClassroomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_classroomId?: ClassroomMemberUserIdClassroomIdCompoundUniqueInput
    AND?: ClassroomMemberWhereInput | ClassroomMemberWhereInput[]
    OR?: ClassroomMemberWhereInput[]
    NOT?: ClassroomMemberWhereInput | ClassroomMemberWhereInput[]
    userId?: StringFilter<"ClassroomMember"> | string
    classroomId?: StringFilter<"ClassroomMember"> | string
    role?: EnumMemberRoleFilter<"ClassroomMember"> | $Enums.MemberRole
    joinedAt?: DateTimeFilter<"ClassroomMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id" | "userId_classroomId">

  export type ClassroomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: ClassroomMemberCountOrderByAggregateInput
    _max?: ClassroomMemberMaxOrderByAggregateInput
    _min?: ClassroomMemberMinOrderByAggregateInput
  }

  export type ClassroomMemberScalarWhereWithAggregatesInput = {
    AND?: ClassroomMemberScalarWhereWithAggregatesInput | ClassroomMemberScalarWhereWithAggregatesInput[]
    OR?: ClassroomMemberScalarWhereWithAggregatesInput[]
    NOT?: ClassroomMemberScalarWhereWithAggregatesInput | ClassroomMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassroomMember"> | string
    userId?: StringWithAggregatesFilter<"ClassroomMember"> | string
    classroomId?: StringWithAggregatesFilter<"ClassroomMember"> | string
    role?: EnumMemberRoleWithAggregatesFilter<"ClassroomMember"> | $Enums.MemberRole
    joinedAt?: DateTimeWithAggregatesFilter<"ClassroomMember"> | Date | string
  }

  export type ClassroomJoinRequestWhereInput = {
    AND?: ClassroomJoinRequestWhereInput | ClassroomJoinRequestWhereInput[]
    OR?: ClassroomJoinRequestWhereInput[]
    NOT?: ClassroomJoinRequestWhereInput | ClassroomJoinRequestWhereInput[]
    id?: StringFilter<"ClassroomJoinRequest"> | string
    userId?: StringFilter<"ClassroomJoinRequest"> | string
    classroomId?: StringFilter<"ClassroomJoinRequest"> | string
    status?: EnumJoinRequestStatusFilter<"ClassroomJoinRequest"> | $Enums.JoinRequestStatus
    createdAt?: DateTimeFilter<"ClassroomJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomJoinRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type ClassroomJoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    classroom?: ClassroomOrderByWithRelationInput
  }

  export type ClassroomJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_classroomId?: ClassroomJoinRequestUserIdClassroomIdCompoundUniqueInput
    AND?: ClassroomJoinRequestWhereInput | ClassroomJoinRequestWhereInput[]
    OR?: ClassroomJoinRequestWhereInput[]
    NOT?: ClassroomJoinRequestWhereInput | ClassroomJoinRequestWhereInput[]
    userId?: StringFilter<"ClassroomJoinRequest"> | string
    classroomId?: StringFilter<"ClassroomJoinRequest"> | string
    status?: EnumJoinRequestStatusFilter<"ClassroomJoinRequest"> | $Enums.JoinRequestStatus
    createdAt?: DateTimeFilter<"ClassroomJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomJoinRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id" | "userId_classroomId">

  export type ClassroomJoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassroomJoinRequestCountOrderByAggregateInput
    _max?: ClassroomJoinRequestMaxOrderByAggregateInput
    _min?: ClassroomJoinRequestMinOrderByAggregateInput
  }

  export type ClassroomJoinRequestScalarWhereWithAggregatesInput = {
    AND?: ClassroomJoinRequestScalarWhereWithAggregatesInput | ClassroomJoinRequestScalarWhereWithAggregatesInput[]
    OR?: ClassroomJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: ClassroomJoinRequestScalarWhereWithAggregatesInput | ClassroomJoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassroomJoinRequest"> | string
    userId?: StringWithAggregatesFilter<"ClassroomJoinRequest"> | string
    classroomId?: StringWithAggregatesFilter<"ClassroomJoinRequest"> | string
    status?: EnumJoinRequestStatusWithAggregatesFilter<"ClassroomJoinRequest"> | $Enums.JoinRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"ClassroomJoinRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassroomJoinRequest"> | Date | string
  }

  export type DailyGoalWhereInput = {
    AND?: DailyGoalWhereInput | DailyGoalWhereInput[]
    OR?: DailyGoalWhereInput[]
    NOT?: DailyGoalWhereInput | DailyGoalWhereInput[]
    id?: StringFilter<"DailyGoal"> | string
    userId?: StringFilter<"DailyGoal"> | string
    classroomId?: StringFilter<"DailyGoal"> | string
    date?: DateTimeFilter<"DailyGoal"> | Date | string
    statement?: StringNullableFilter<"DailyGoal"> | string | null
    createdAt?: DateTimeFilter<"DailyGoal"> | Date | string
    updatedAt?: DateTimeFilter<"DailyGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    tasks?: DailyGoalTaskListRelationFilter
  }

  export type DailyGoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    statement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    classroom?: ClassroomOrderByWithRelationInput
    tasks?: DailyGoalTaskOrderByRelationAggregateInput
  }

  export type DailyGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_classroomId_date?: DailyGoalUserIdClassroomIdDateCompoundUniqueInput
    AND?: DailyGoalWhereInput | DailyGoalWhereInput[]
    OR?: DailyGoalWhereInput[]
    NOT?: DailyGoalWhereInput | DailyGoalWhereInput[]
    userId?: StringFilter<"DailyGoal"> | string
    classroomId?: StringFilter<"DailyGoal"> | string
    date?: DateTimeFilter<"DailyGoal"> | Date | string
    statement?: StringNullableFilter<"DailyGoal"> | string | null
    createdAt?: DateTimeFilter<"DailyGoal"> | Date | string
    updatedAt?: DateTimeFilter<"DailyGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    tasks?: DailyGoalTaskListRelationFilter
  }, "id" | "userId_classroomId_date">

  export type DailyGoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    statement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyGoalCountOrderByAggregateInput
    _max?: DailyGoalMaxOrderByAggregateInput
    _min?: DailyGoalMinOrderByAggregateInput
  }

  export type DailyGoalScalarWhereWithAggregatesInput = {
    AND?: DailyGoalScalarWhereWithAggregatesInput | DailyGoalScalarWhereWithAggregatesInput[]
    OR?: DailyGoalScalarWhereWithAggregatesInput[]
    NOT?: DailyGoalScalarWhereWithAggregatesInput | DailyGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyGoal"> | string
    userId?: StringWithAggregatesFilter<"DailyGoal"> | string
    classroomId?: StringWithAggregatesFilter<"DailyGoal"> | string
    date?: DateTimeWithAggregatesFilter<"DailyGoal"> | Date | string
    statement?: StringNullableWithAggregatesFilter<"DailyGoal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyGoal"> | Date | string
  }

  export type DailyGoalTaskWhereInput = {
    AND?: DailyGoalTaskWhereInput | DailyGoalTaskWhereInput[]
    OR?: DailyGoalTaskWhereInput[]
    NOT?: DailyGoalTaskWhereInput | DailyGoalTaskWhereInput[]
    id?: StringFilter<"DailyGoalTask"> | string
    dailyGoalId?: StringFilter<"DailyGoalTask"> | string
    title?: StringFilter<"DailyGoalTask"> | string
    completed?: BoolFilter<"DailyGoalTask"> | boolean
    createdAt?: DateTimeFilter<"DailyGoalTask"> | Date | string
    dailyGoal?: XOR<DailyGoalScalarRelationFilter, DailyGoalWhereInput>
  }

  export type DailyGoalTaskOrderByWithRelationInput = {
    id?: SortOrder
    dailyGoalId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    dailyGoal?: DailyGoalOrderByWithRelationInput
  }

  export type DailyGoalTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyGoalTaskWhereInput | DailyGoalTaskWhereInput[]
    OR?: DailyGoalTaskWhereInput[]
    NOT?: DailyGoalTaskWhereInput | DailyGoalTaskWhereInput[]
    dailyGoalId?: StringFilter<"DailyGoalTask"> | string
    title?: StringFilter<"DailyGoalTask"> | string
    completed?: BoolFilter<"DailyGoalTask"> | boolean
    createdAt?: DateTimeFilter<"DailyGoalTask"> | Date | string
    dailyGoal?: XOR<DailyGoalScalarRelationFilter, DailyGoalWhereInput>
  }, "id">

  export type DailyGoalTaskOrderByWithAggregationInput = {
    id?: SortOrder
    dailyGoalId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    _count?: DailyGoalTaskCountOrderByAggregateInput
    _max?: DailyGoalTaskMaxOrderByAggregateInput
    _min?: DailyGoalTaskMinOrderByAggregateInput
  }

  export type DailyGoalTaskScalarWhereWithAggregatesInput = {
    AND?: DailyGoalTaskScalarWhereWithAggregatesInput | DailyGoalTaskScalarWhereWithAggregatesInput[]
    OR?: DailyGoalTaskScalarWhereWithAggregatesInput[]
    NOT?: DailyGoalTaskScalarWhereWithAggregatesInput | DailyGoalTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyGoalTask"> | string
    dailyGoalId?: StringWithAggregatesFilter<"DailyGoalTask"> | string
    title?: StringWithAggregatesFilter<"DailyGoalTask"> | string
    completed?: BoolWithAggregatesFilter<"DailyGoalTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DailyGoalTask"> | Date | string
  }

  export type DailyReflectionWhereInput = {
    AND?: DailyReflectionWhereInput | DailyReflectionWhereInput[]
    OR?: DailyReflectionWhereInput[]
    NOT?: DailyReflectionWhereInput | DailyReflectionWhereInput[]
    id?: StringFilter<"DailyReflection"> | string
    userId?: StringFilter<"DailyReflection"> | string
    classroomId?: StringFilter<"DailyReflection"> | string
    date?: DateTimeFilter<"DailyReflection"> | Date | string
    content?: StringFilter<"DailyReflection"> | string
    assessmentScore?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentCorrect?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentTotal?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentDetails?: JsonNullableFilter<"DailyReflection">
    assessedAt?: DateTimeNullableFilter<"DailyReflection"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyReflection"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReflection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type DailyReflectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    assessmentScore?: SortOrderInput | SortOrder
    assessmentCorrect?: SortOrderInput | SortOrder
    assessmentTotal?: SortOrderInput | SortOrder
    assessmentDetails?: SortOrderInput | SortOrder
    assessedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    classroom?: ClassroomOrderByWithRelationInput
  }

  export type DailyReflectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_classroomId_date?: DailyReflectionUserIdClassroomIdDateCompoundUniqueInput
    AND?: DailyReflectionWhereInput | DailyReflectionWhereInput[]
    OR?: DailyReflectionWhereInput[]
    NOT?: DailyReflectionWhereInput | DailyReflectionWhereInput[]
    userId?: StringFilter<"DailyReflection"> | string
    classroomId?: StringFilter<"DailyReflection"> | string
    date?: DateTimeFilter<"DailyReflection"> | Date | string
    content?: StringFilter<"DailyReflection"> | string
    assessmentScore?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentCorrect?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentTotal?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentDetails?: JsonNullableFilter<"DailyReflection">
    assessedAt?: DateTimeNullableFilter<"DailyReflection"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyReflection"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReflection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id" | "userId_classroomId_date">

  export type DailyReflectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    assessmentScore?: SortOrderInput | SortOrder
    assessmentCorrect?: SortOrderInput | SortOrder
    assessmentTotal?: SortOrderInput | SortOrder
    assessmentDetails?: SortOrderInput | SortOrder
    assessedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyReflectionCountOrderByAggregateInput
    _avg?: DailyReflectionAvgOrderByAggregateInput
    _max?: DailyReflectionMaxOrderByAggregateInput
    _min?: DailyReflectionMinOrderByAggregateInput
    _sum?: DailyReflectionSumOrderByAggregateInput
  }

  export type DailyReflectionScalarWhereWithAggregatesInput = {
    AND?: DailyReflectionScalarWhereWithAggregatesInput | DailyReflectionScalarWhereWithAggregatesInput[]
    OR?: DailyReflectionScalarWhereWithAggregatesInput[]
    NOT?: DailyReflectionScalarWhereWithAggregatesInput | DailyReflectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyReflection"> | string
    userId?: StringWithAggregatesFilter<"DailyReflection"> | string
    classroomId?: StringWithAggregatesFilter<"DailyReflection"> | string
    date?: DateTimeWithAggregatesFilter<"DailyReflection"> | Date | string
    content?: StringWithAggregatesFilter<"DailyReflection"> | string
    assessmentScore?: IntNullableWithAggregatesFilter<"DailyReflection"> | number | null
    assessmentCorrect?: IntNullableWithAggregatesFilter<"DailyReflection"> | number | null
    assessmentTotal?: IntNullableWithAggregatesFilter<"DailyReflection"> | number | null
    assessmentDetails?: JsonNullableWithAggregatesFilter<"DailyReflection">
    assessedAt?: DateTimeNullableWithAggregatesFilter<"DailyReflection"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyReflection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyReflection"> | Date | string
  }

  export type ClassroomNotificationWhereInput = {
    AND?: ClassroomNotificationWhereInput | ClassroomNotificationWhereInput[]
    OR?: ClassroomNotificationWhereInput[]
    NOT?: ClassroomNotificationWhereInput | ClassroomNotificationWhereInput[]
    id?: StringFilter<"ClassroomNotification"> | string
    classroomId?: StringFilter<"ClassroomNotification"> | string
    createdById?: StringNullableFilter<"ClassroomNotification"> | string | null
    recipientEmail?: StringNullableFilter<"ClassroomNotification"> | string | null
    type?: StringFilter<"ClassroomNotification"> | string
    title?: StringFilter<"ClassroomNotification"> | string
    content?: StringFilter<"ClassroomNotification"> | string
    createdAt?: DateTimeFilter<"ClassroomNotification"> | Date | string
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reads?: ClassroomNotificationReadListRelationFilter
  }

  export type ClassroomNotificationOrderByWithRelationInput = {
    id?: SortOrder
    classroomId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    recipientEmail?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    classroom?: ClassroomOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    reads?: ClassroomNotificationReadOrderByRelationAggregateInput
  }

  export type ClassroomNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassroomNotificationWhereInput | ClassroomNotificationWhereInput[]
    OR?: ClassroomNotificationWhereInput[]
    NOT?: ClassroomNotificationWhereInput | ClassroomNotificationWhereInput[]
    classroomId?: StringFilter<"ClassroomNotification"> | string
    createdById?: StringNullableFilter<"ClassroomNotification"> | string | null
    recipientEmail?: StringNullableFilter<"ClassroomNotification"> | string | null
    type?: StringFilter<"ClassroomNotification"> | string
    title?: StringFilter<"ClassroomNotification"> | string
    content?: StringFilter<"ClassroomNotification"> | string
    createdAt?: DateTimeFilter<"ClassroomNotification"> | Date | string
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reads?: ClassroomNotificationReadListRelationFilter
  }, "id">

  export type ClassroomNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    classroomId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    recipientEmail?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ClassroomNotificationCountOrderByAggregateInput
    _max?: ClassroomNotificationMaxOrderByAggregateInput
    _min?: ClassroomNotificationMinOrderByAggregateInput
  }

  export type ClassroomNotificationScalarWhereWithAggregatesInput = {
    AND?: ClassroomNotificationScalarWhereWithAggregatesInput | ClassroomNotificationScalarWhereWithAggregatesInput[]
    OR?: ClassroomNotificationScalarWhereWithAggregatesInput[]
    NOT?: ClassroomNotificationScalarWhereWithAggregatesInput | ClassroomNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassroomNotification"> | string
    classroomId?: StringWithAggregatesFilter<"ClassroomNotification"> | string
    createdById?: StringNullableWithAggregatesFilter<"ClassroomNotification"> | string | null
    recipientEmail?: StringNullableWithAggregatesFilter<"ClassroomNotification"> | string | null
    type?: StringWithAggregatesFilter<"ClassroomNotification"> | string
    title?: StringWithAggregatesFilter<"ClassroomNotification"> | string
    content?: StringWithAggregatesFilter<"ClassroomNotification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClassroomNotification"> | Date | string
  }

  export type ClassroomNotificationReadWhereInput = {
    AND?: ClassroomNotificationReadWhereInput | ClassroomNotificationReadWhereInput[]
    OR?: ClassroomNotificationReadWhereInput[]
    NOT?: ClassroomNotificationReadWhereInput | ClassroomNotificationReadWhereInput[]
    notificationId?: StringFilter<"ClassroomNotificationRead"> | string
    userId?: StringFilter<"ClassroomNotificationRead"> | string
    readAt?: DateTimeFilter<"ClassroomNotificationRead"> | Date | string
    notification?: XOR<ClassroomNotificationScalarRelationFilter, ClassroomNotificationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClassroomNotificationReadOrderByWithRelationInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
    notification?: ClassroomNotificationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ClassroomNotificationReadWhereUniqueInput = Prisma.AtLeast<{
    notificationId_userId?: ClassroomNotificationReadNotificationIdUserIdCompoundUniqueInput
    AND?: ClassroomNotificationReadWhereInput | ClassroomNotificationReadWhereInput[]
    OR?: ClassroomNotificationReadWhereInput[]
    NOT?: ClassroomNotificationReadWhereInput | ClassroomNotificationReadWhereInput[]
    notificationId?: StringFilter<"ClassroomNotificationRead"> | string
    userId?: StringFilter<"ClassroomNotificationRead"> | string
    readAt?: DateTimeFilter<"ClassroomNotificationRead"> | Date | string
    notification?: XOR<ClassroomNotificationScalarRelationFilter, ClassroomNotificationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "notificationId_userId">

  export type ClassroomNotificationReadOrderByWithAggregationInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
    _count?: ClassroomNotificationReadCountOrderByAggregateInput
    _max?: ClassroomNotificationReadMaxOrderByAggregateInput
    _min?: ClassroomNotificationReadMinOrderByAggregateInput
  }

  export type ClassroomNotificationReadScalarWhereWithAggregatesInput = {
    AND?: ClassroomNotificationReadScalarWhereWithAggregatesInput | ClassroomNotificationReadScalarWhereWithAggregatesInput[]
    OR?: ClassroomNotificationReadScalarWhereWithAggregatesInput[]
    NOT?: ClassroomNotificationReadScalarWhereWithAggregatesInput | ClassroomNotificationReadScalarWhereWithAggregatesInput[]
    notificationId?: StringWithAggregatesFilter<"ClassroomNotificationRead"> | string
    userId?: StringWithAggregatesFilter<"ClassroomNotificationRead"> | string
    readAt?: DateTimeWithAggregatesFilter<"ClassroomNotificationRead"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomCreateInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    host: UserCreateNestedOneWithoutHostedClassroomsInput
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutHostedClassroomsNestedInput
    members?: ClassroomMemberUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
  }

  export type ClassroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClassroomMemberCreateInput = {
    id?: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    classroom: ClassroomCreateNestedOneWithoutMembersInput
  }

  export type ClassroomMemberUncheckedCreateInput = {
    id?: string
    userId: string
    classroomId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type ClassroomMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ClassroomMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomMemberCreateManyInput = {
    id?: string
    userId: string
    classroomId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type ClassroomMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestCreateInput = {
    id?: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClassroomJoinRequestsInput
    classroom: ClassroomCreateNestedOneWithoutJoinRequestsInput
  }

  export type ClassroomJoinRequestUncheckedCreateInput = {
    id?: string
    userId: string
    classroomId: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomJoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassroomJoinRequestsNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type ClassroomJoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestCreateManyInput = {
    id?: string
    userId: string
    classroomId: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomJoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalCreateInput = {
    id?: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyGoalsInput
    classroom: ClassroomCreateNestedOneWithoutDailyGoalsInput
    tasks?: DailyGoalTaskCreateNestedManyWithoutDailyGoalInput
  }

  export type DailyGoalUncheckedCreateInput = {
    id?: string
    userId: string
    classroomId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: DailyGoalTaskUncheckedCreateNestedManyWithoutDailyGoalInput
  }

  export type DailyGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyGoalsNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutDailyGoalsNestedInput
    tasks?: DailyGoalTaskUpdateManyWithoutDailyGoalNestedInput
  }

  export type DailyGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: DailyGoalTaskUncheckedUpdateManyWithoutDailyGoalNestedInput
  }

  export type DailyGoalCreateManyInput = {
    id?: string
    userId: string
    classroomId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalTaskCreateInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    dailyGoal: DailyGoalCreateNestedOneWithoutTasksInput
  }

  export type DailyGoalTaskUncheckedCreateInput = {
    id?: string
    dailyGoalId: string
    title: string
    completed?: boolean
    createdAt?: Date | string
  }

  export type DailyGoalTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: DailyGoalUpdateOneRequiredWithoutTasksNestedInput
  }

  export type DailyGoalTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyGoalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalTaskCreateManyInput = {
    id?: string
    dailyGoalId: string
    title: string
    completed?: boolean
    createdAt?: Date | string
  }

  export type DailyGoalTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyGoalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionCreateInput = {
    id?: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyReflectionsInput
    classroom: ClassroomCreateNestedOneWithoutDailyReflectionsInput
  }

  export type DailyReflectionUncheckedCreateInput = {
    id?: string
    userId: string
    classroomId: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReflectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyReflectionsNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutDailyReflectionsNestedInput
  }

  export type DailyReflectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionCreateManyInput = {
    id?: string
    userId: string
    classroomId: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReflectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationCreateInput = {
    id?: string
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutNotificationsInput
    createdBy?: UserCreateNestedOneWithoutNotificationsCreatedInput
    reads?: ClassroomNotificationReadCreateNestedManyWithoutNotificationInput
  }

  export type ClassroomNotificationUncheckedCreateInput = {
    id?: string
    classroomId: string
    createdById?: string | null
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    reads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type ClassroomNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutNotificationsNestedInput
    createdBy?: UserUpdateOneWithoutNotificationsCreatedNestedInput
    reads?: ClassroomNotificationReadUpdateManyWithoutNotificationNestedInput
  }

  export type ClassroomNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: ClassroomNotificationReadUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type ClassroomNotificationCreateManyInput = {
    id?: string
    classroomId: string
    createdById?: string | null
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type ClassroomNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadCreateInput = {
    readAt?: Date | string
    notification: ClassroomNotificationCreateNestedOneWithoutReadsInput
    user: UserCreateNestedOneWithoutNotificationReadsInput
  }

  export type ClassroomNotificationReadUncheckedCreateInput = {
    notificationId: string
    userId: string
    readAt?: Date | string
  }

  export type ClassroomNotificationReadUpdateInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: ClassroomNotificationUpdateOneRequiredWithoutReadsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type ClassroomNotificationReadUncheckedUpdateInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadCreateManyInput = {
    notificationId: string
    userId: string
    readAt?: Date | string
  }

  export type ClassroomNotificationReadUpdateManyMutationInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadUncheckedUpdateManyInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClassroomListRelationFilter = {
    every?: ClassroomWhereInput
    some?: ClassroomWhereInput
    none?: ClassroomWhereInput
  }

  export type ClassroomMemberListRelationFilter = {
    every?: ClassroomMemberWhereInput
    some?: ClassroomMemberWhereInput
    none?: ClassroomMemberWhereInput
  }

  export type ClassroomJoinRequestListRelationFilter = {
    every?: ClassroomJoinRequestWhereInput
    some?: ClassroomJoinRequestWhereInput
    none?: ClassroomJoinRequestWhereInput
  }

  export type DailyGoalListRelationFilter = {
    every?: DailyGoalWhereInput
    some?: DailyGoalWhereInput
    none?: DailyGoalWhereInput
  }

  export type DailyReflectionListRelationFilter = {
    every?: DailyReflectionWhereInput
    some?: DailyReflectionWhereInput
    none?: DailyReflectionWhereInput
  }

  export type ClassroomNotificationListRelationFilter = {
    every?: ClassroomNotificationWhereInput
    some?: ClassroomNotificationWhereInput
    none?: ClassroomNotificationWhereInput
  }

  export type ClassroomNotificationReadListRelationFilter = {
    every?: ClassroomNotificationReadWhereInput
    some?: ClassroomNotificationReadWhereInput
    none?: ClassroomNotificationReadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyReflectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomNotificationReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    joinCode?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyGoal?: SortOrder
    goalSettingTime?: SortOrder
    reflectionTime?: SortOrder
    tasksPerDay?: SortOrder
    dayParts?: SortOrder
    timezone?: SortOrder
    allowLateGoalEdits?: SortOrder
  }

  export type ClassroomAvgOrderByAggregateInput = {
    tasksPerDay?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    joinCode?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyGoal?: SortOrder
    goalSettingTime?: SortOrder
    reflectionTime?: SortOrder
    tasksPerDay?: SortOrder
    timezone?: SortOrder
    allowLateGoalEdits?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    joinCode?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyGoal?: SortOrder
    goalSettingTime?: SortOrder
    reflectionTime?: SortOrder
    tasksPerDay?: SortOrder
    timezone?: SortOrder
    allowLateGoalEdits?: SortOrder
  }

  export type ClassroomSumOrderByAggregateInput = {
    tasksPerDay?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type ClassroomScalarRelationFilter = {
    is?: ClassroomWhereInput
    isNot?: ClassroomWhereInput
  }

  export type ClassroomMemberUserIdClassroomIdCompoundUniqueInput = {
    userId: string
    classroomId: string
  }

  export type ClassroomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ClassroomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ClassroomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type EnumJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusFilter<$PrismaModel> | $Enums.JoinRequestStatus
  }

  export type ClassroomJoinRequestUserIdClassroomIdCompoundUniqueInput = {
    userId: string
    classroomId: string
  }

  export type ClassroomJoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomJoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomJoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
  }

  export type DailyGoalTaskListRelationFilter = {
    every?: DailyGoalTaskWhereInput
    some?: DailyGoalTaskWhereInput
    none?: DailyGoalTaskWhereInput
  }

  export type DailyGoalTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyGoalUserIdClassroomIdDateCompoundUniqueInput = {
    userId: string
    classroomId: string
    date: Date | string
  }

  export type DailyGoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    statement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    statement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyGoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    statement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyGoalScalarRelationFilter = {
    is?: DailyGoalWhereInput
    isNot?: DailyGoalWhereInput
  }

  export type DailyGoalTaskCountOrderByAggregateInput = {
    id?: SortOrder
    dailyGoalId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyGoalTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyGoalId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyGoalTaskMinOrderByAggregateInput = {
    id?: SortOrder
    dailyGoalId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DailyReflectionUserIdClassroomIdDateCompoundUniqueInput = {
    userId: string
    classroomId: string
    date: Date | string
  }

  export type DailyReflectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    assessmentScore?: SortOrder
    assessmentCorrect?: SortOrder
    assessmentTotal?: SortOrder
    assessmentDetails?: SortOrder
    assessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReflectionAvgOrderByAggregateInput = {
    assessmentScore?: SortOrder
    assessmentCorrect?: SortOrder
    assessmentTotal?: SortOrder
  }

  export type DailyReflectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    assessmentScore?: SortOrder
    assessmentCorrect?: SortOrder
    assessmentTotal?: SortOrder
    assessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReflectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classroomId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    assessmentScore?: SortOrder
    assessmentCorrect?: SortOrder
    assessmentTotal?: SortOrder
    assessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReflectionSumOrderByAggregateInput = {
    assessmentScore?: SortOrder
    assessmentCorrect?: SortOrder
    assessmentTotal?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ClassroomNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    classroomId?: SortOrder
    createdById?: SortOrder
    recipientEmail?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassroomNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    classroomId?: SortOrder
    createdById?: SortOrder
    recipientEmail?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassroomNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    classroomId?: SortOrder
    createdById?: SortOrder
    recipientEmail?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassroomNotificationScalarRelationFilter = {
    is?: ClassroomNotificationWhereInput
    isNot?: ClassroomNotificationWhereInput
  }

  export type ClassroomNotificationReadNotificationIdUserIdCompoundUniqueInput = {
    notificationId: string
    userId: string
  }

  export type ClassroomNotificationReadCountOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type ClassroomNotificationReadMaxOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type ClassroomNotificationReadMinOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type ClassroomCreateNestedManyWithoutHostInput = {
    create?: XOR<ClassroomCreateWithoutHostInput, ClassroomUncheckedCreateWithoutHostInput> | ClassroomCreateWithoutHostInput[] | ClassroomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutHostInput | ClassroomCreateOrConnectWithoutHostInput[]
    createMany?: ClassroomCreateManyHostInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassroomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassroomMemberCreateWithoutUserInput, ClassroomMemberUncheckedCreateWithoutUserInput> | ClassroomMemberCreateWithoutUserInput[] | ClassroomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutUserInput | ClassroomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ClassroomMemberCreateManyUserInputEnvelope
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
  }

  export type ClassroomJoinRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutUserInput, ClassroomJoinRequestUncheckedCreateWithoutUserInput> | ClassroomJoinRequestCreateWithoutUserInput[] | ClassroomJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutUserInput | ClassroomJoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: ClassroomJoinRequestCreateManyUserInputEnvelope
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
  }

  export type DailyGoalCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput> | DailyGoalCreateWithoutUserInput[] | DailyGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput | DailyGoalCreateOrConnectWithoutUserInput[]
    createMany?: DailyGoalCreateManyUserInputEnvelope
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
  }

  export type DailyReflectionCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReflectionCreateWithoutUserInput, DailyReflectionUncheckedCreateWithoutUserInput> | DailyReflectionCreateWithoutUserInput[] | DailyReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutUserInput | DailyReflectionCreateOrConnectWithoutUserInput[]
    createMany?: DailyReflectionCreateManyUserInputEnvelope
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
  }

  export type ClassroomNotificationCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClassroomNotificationCreateWithoutCreatedByInput, ClassroomNotificationUncheckedCreateWithoutCreatedByInput> | ClassroomNotificationCreateWithoutCreatedByInput[] | ClassroomNotificationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutCreatedByInput | ClassroomNotificationCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClassroomNotificationCreateManyCreatedByInputEnvelope
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
  }

  export type ClassroomNotificationReadCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutUserInput, ClassroomNotificationReadUncheckedCreateWithoutUserInput> | ClassroomNotificationReadCreateWithoutUserInput[] | ClassroomNotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutUserInput | ClassroomNotificationReadCreateOrConnectWithoutUserInput[]
    createMany?: ClassroomNotificationReadCreateManyUserInputEnvelope
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
  }

  export type ClassroomUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<ClassroomCreateWithoutHostInput, ClassroomUncheckedCreateWithoutHostInput> | ClassroomCreateWithoutHostInput[] | ClassroomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutHostInput | ClassroomCreateOrConnectWithoutHostInput[]
    createMany?: ClassroomCreateManyHostInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassroomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassroomMemberCreateWithoutUserInput, ClassroomMemberUncheckedCreateWithoutUserInput> | ClassroomMemberCreateWithoutUserInput[] | ClassroomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutUserInput | ClassroomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ClassroomMemberCreateManyUserInputEnvelope
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
  }

  export type ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutUserInput, ClassroomJoinRequestUncheckedCreateWithoutUserInput> | ClassroomJoinRequestCreateWithoutUserInput[] | ClassroomJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutUserInput | ClassroomJoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: ClassroomJoinRequestCreateManyUserInputEnvelope
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
  }

  export type DailyGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput> | DailyGoalCreateWithoutUserInput[] | DailyGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput | DailyGoalCreateOrConnectWithoutUserInput[]
    createMany?: DailyGoalCreateManyUserInputEnvelope
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
  }

  export type DailyReflectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReflectionCreateWithoutUserInput, DailyReflectionUncheckedCreateWithoutUserInput> | DailyReflectionCreateWithoutUserInput[] | DailyReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutUserInput | DailyReflectionCreateOrConnectWithoutUserInput[]
    createMany?: DailyReflectionCreateManyUserInputEnvelope
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
  }

  export type ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClassroomNotificationCreateWithoutCreatedByInput, ClassroomNotificationUncheckedCreateWithoutCreatedByInput> | ClassroomNotificationCreateWithoutCreatedByInput[] | ClassroomNotificationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutCreatedByInput | ClassroomNotificationCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClassroomNotificationCreateManyCreatedByInputEnvelope
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
  }

  export type ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutUserInput, ClassroomNotificationReadUncheckedCreateWithoutUserInput> | ClassroomNotificationReadCreateWithoutUserInput[] | ClassroomNotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutUserInput | ClassroomNotificationReadCreateOrConnectWithoutUserInput[]
    createMany?: ClassroomNotificationReadCreateManyUserInputEnvelope
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClassroomUpdateManyWithoutHostNestedInput = {
    create?: XOR<ClassroomCreateWithoutHostInput, ClassroomUncheckedCreateWithoutHostInput> | ClassroomCreateWithoutHostInput[] | ClassroomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutHostInput | ClassroomCreateOrConnectWithoutHostInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutHostInput | ClassroomUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ClassroomCreateManyHostInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutHostInput | ClassroomUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutHostInput | ClassroomUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type ClassroomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassroomMemberCreateWithoutUserInput, ClassroomMemberUncheckedCreateWithoutUserInput> | ClassroomMemberCreateWithoutUserInput[] | ClassroomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutUserInput | ClassroomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ClassroomMemberUpsertWithWhereUniqueWithoutUserInput | ClassroomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassroomMemberCreateManyUserInputEnvelope
    set?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    disconnect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    delete?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    update?: ClassroomMemberUpdateWithWhereUniqueWithoutUserInput | ClassroomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassroomMemberUpdateManyWithWhereWithoutUserInput | ClassroomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassroomMemberScalarWhereInput | ClassroomMemberScalarWhereInput[]
  }

  export type ClassroomJoinRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutUserInput, ClassroomJoinRequestUncheckedCreateWithoutUserInput> | ClassroomJoinRequestCreateWithoutUserInput[] | ClassroomJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutUserInput | ClassroomJoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: ClassroomJoinRequestUpsertWithWhereUniqueWithoutUserInput | ClassroomJoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassroomJoinRequestCreateManyUserInputEnvelope
    set?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    disconnect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    delete?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    update?: ClassroomJoinRequestUpdateWithWhereUniqueWithoutUserInput | ClassroomJoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassroomJoinRequestUpdateManyWithWhereWithoutUserInput | ClassroomJoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassroomJoinRequestScalarWhereInput | ClassroomJoinRequestScalarWhereInput[]
  }

  export type DailyGoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput> | DailyGoalCreateWithoutUserInput[] | DailyGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput | DailyGoalCreateOrConnectWithoutUserInput[]
    upsert?: DailyGoalUpsertWithWhereUniqueWithoutUserInput | DailyGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyGoalCreateManyUserInputEnvelope
    set?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    disconnect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    delete?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    update?: DailyGoalUpdateWithWhereUniqueWithoutUserInput | DailyGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyGoalUpdateManyWithWhereWithoutUserInput | DailyGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyGoalScalarWhereInput | DailyGoalScalarWhereInput[]
  }

  export type DailyReflectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReflectionCreateWithoutUserInput, DailyReflectionUncheckedCreateWithoutUserInput> | DailyReflectionCreateWithoutUserInput[] | DailyReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutUserInput | DailyReflectionCreateOrConnectWithoutUserInput[]
    upsert?: DailyReflectionUpsertWithWhereUniqueWithoutUserInput | DailyReflectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReflectionCreateManyUserInputEnvelope
    set?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    disconnect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    delete?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    update?: DailyReflectionUpdateWithWhereUniqueWithoutUserInput | DailyReflectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReflectionUpdateManyWithWhereWithoutUserInput | DailyReflectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReflectionScalarWhereInput | DailyReflectionScalarWhereInput[]
  }

  export type ClassroomNotificationUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClassroomNotificationCreateWithoutCreatedByInput, ClassroomNotificationUncheckedCreateWithoutCreatedByInput> | ClassroomNotificationCreateWithoutCreatedByInput[] | ClassroomNotificationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutCreatedByInput | ClassroomNotificationCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClassroomNotificationUpsertWithWhereUniqueWithoutCreatedByInput | ClassroomNotificationUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClassroomNotificationCreateManyCreatedByInputEnvelope
    set?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    disconnect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    delete?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    update?: ClassroomNotificationUpdateWithWhereUniqueWithoutCreatedByInput | ClassroomNotificationUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClassroomNotificationUpdateManyWithWhereWithoutCreatedByInput | ClassroomNotificationUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClassroomNotificationScalarWhereInput | ClassroomNotificationScalarWhereInput[]
  }

  export type ClassroomNotificationReadUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutUserInput, ClassroomNotificationReadUncheckedCreateWithoutUserInput> | ClassroomNotificationReadCreateWithoutUserInput[] | ClassroomNotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutUserInput | ClassroomNotificationReadCreateOrConnectWithoutUserInput[]
    upsert?: ClassroomNotificationReadUpsertWithWhereUniqueWithoutUserInput | ClassroomNotificationReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassroomNotificationReadCreateManyUserInputEnvelope
    set?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    disconnect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    delete?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    update?: ClassroomNotificationReadUpdateWithWhereUniqueWithoutUserInput | ClassroomNotificationReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassroomNotificationReadUpdateManyWithWhereWithoutUserInput | ClassroomNotificationReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassroomNotificationReadScalarWhereInput | ClassroomNotificationReadScalarWhereInput[]
  }

  export type ClassroomUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<ClassroomCreateWithoutHostInput, ClassroomUncheckedCreateWithoutHostInput> | ClassroomCreateWithoutHostInput[] | ClassroomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutHostInput | ClassroomCreateOrConnectWithoutHostInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutHostInput | ClassroomUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ClassroomCreateManyHostInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutHostInput | ClassroomUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutHostInput | ClassroomUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassroomMemberCreateWithoutUserInput, ClassroomMemberUncheckedCreateWithoutUserInput> | ClassroomMemberCreateWithoutUserInput[] | ClassroomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutUserInput | ClassroomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ClassroomMemberUpsertWithWhereUniqueWithoutUserInput | ClassroomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassroomMemberCreateManyUserInputEnvelope
    set?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    disconnect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    delete?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    update?: ClassroomMemberUpdateWithWhereUniqueWithoutUserInput | ClassroomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassroomMemberUpdateManyWithWhereWithoutUserInput | ClassroomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassroomMemberScalarWhereInput | ClassroomMemberScalarWhereInput[]
  }

  export type ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutUserInput, ClassroomJoinRequestUncheckedCreateWithoutUserInput> | ClassroomJoinRequestCreateWithoutUserInput[] | ClassroomJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutUserInput | ClassroomJoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: ClassroomJoinRequestUpsertWithWhereUniqueWithoutUserInput | ClassroomJoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassroomJoinRequestCreateManyUserInputEnvelope
    set?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    disconnect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    delete?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    update?: ClassroomJoinRequestUpdateWithWhereUniqueWithoutUserInput | ClassroomJoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassroomJoinRequestUpdateManyWithWhereWithoutUserInput | ClassroomJoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassroomJoinRequestScalarWhereInput | ClassroomJoinRequestScalarWhereInput[]
  }

  export type DailyGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput> | DailyGoalCreateWithoutUserInput[] | DailyGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput | DailyGoalCreateOrConnectWithoutUserInput[]
    upsert?: DailyGoalUpsertWithWhereUniqueWithoutUserInput | DailyGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyGoalCreateManyUserInputEnvelope
    set?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    disconnect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    delete?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    update?: DailyGoalUpdateWithWhereUniqueWithoutUserInput | DailyGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyGoalUpdateManyWithWhereWithoutUserInput | DailyGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyGoalScalarWhereInput | DailyGoalScalarWhereInput[]
  }

  export type DailyReflectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReflectionCreateWithoutUserInput, DailyReflectionUncheckedCreateWithoutUserInput> | DailyReflectionCreateWithoutUserInput[] | DailyReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutUserInput | DailyReflectionCreateOrConnectWithoutUserInput[]
    upsert?: DailyReflectionUpsertWithWhereUniqueWithoutUserInput | DailyReflectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReflectionCreateManyUserInputEnvelope
    set?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    disconnect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    delete?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    update?: DailyReflectionUpdateWithWhereUniqueWithoutUserInput | DailyReflectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReflectionUpdateManyWithWhereWithoutUserInput | DailyReflectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReflectionScalarWhereInput | DailyReflectionScalarWhereInput[]
  }

  export type ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClassroomNotificationCreateWithoutCreatedByInput, ClassroomNotificationUncheckedCreateWithoutCreatedByInput> | ClassroomNotificationCreateWithoutCreatedByInput[] | ClassroomNotificationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutCreatedByInput | ClassroomNotificationCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClassroomNotificationUpsertWithWhereUniqueWithoutCreatedByInput | ClassroomNotificationUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClassroomNotificationCreateManyCreatedByInputEnvelope
    set?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    disconnect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    delete?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    update?: ClassroomNotificationUpdateWithWhereUniqueWithoutCreatedByInput | ClassroomNotificationUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClassroomNotificationUpdateManyWithWhereWithoutCreatedByInput | ClassroomNotificationUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClassroomNotificationScalarWhereInput | ClassroomNotificationScalarWhereInput[]
  }

  export type ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutUserInput, ClassroomNotificationReadUncheckedCreateWithoutUserInput> | ClassroomNotificationReadCreateWithoutUserInput[] | ClassroomNotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutUserInput | ClassroomNotificationReadCreateOrConnectWithoutUserInput[]
    upsert?: ClassroomNotificationReadUpsertWithWhereUniqueWithoutUserInput | ClassroomNotificationReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassroomNotificationReadCreateManyUserInputEnvelope
    set?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    disconnect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    delete?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    update?: ClassroomNotificationReadUpdateWithWhereUniqueWithoutUserInput | ClassroomNotificationReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassroomNotificationReadUpdateManyWithWhereWithoutUserInput | ClassroomNotificationReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassroomNotificationReadScalarWhereInput | ClassroomNotificationReadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHostedClassroomsInput = {
    create?: XOR<UserCreateWithoutHostedClassroomsInput, UserUncheckedCreateWithoutHostedClassroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedClassroomsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomMemberCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomMemberCreateWithoutClassroomInput, ClassroomMemberUncheckedCreateWithoutClassroomInput> | ClassroomMemberCreateWithoutClassroomInput[] | ClassroomMemberUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutClassroomInput | ClassroomMemberCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomMemberCreateManyClassroomInputEnvelope
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
  }

  export type ClassroomJoinRequestCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutClassroomInput, ClassroomJoinRequestUncheckedCreateWithoutClassroomInput> | ClassroomJoinRequestCreateWithoutClassroomInput[] | ClassroomJoinRequestUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutClassroomInput | ClassroomJoinRequestCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomJoinRequestCreateManyClassroomInputEnvelope
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
  }

  export type DailyGoalCreateNestedManyWithoutClassroomInput = {
    create?: XOR<DailyGoalCreateWithoutClassroomInput, DailyGoalUncheckedCreateWithoutClassroomInput> | DailyGoalCreateWithoutClassroomInput[] | DailyGoalUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutClassroomInput | DailyGoalCreateOrConnectWithoutClassroomInput[]
    createMany?: DailyGoalCreateManyClassroomInputEnvelope
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
  }

  export type DailyReflectionCreateNestedManyWithoutClassroomInput = {
    create?: XOR<DailyReflectionCreateWithoutClassroomInput, DailyReflectionUncheckedCreateWithoutClassroomInput> | DailyReflectionCreateWithoutClassroomInput[] | DailyReflectionUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutClassroomInput | DailyReflectionCreateOrConnectWithoutClassroomInput[]
    createMany?: DailyReflectionCreateManyClassroomInputEnvelope
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
  }

  export type ClassroomNotificationCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomNotificationCreateWithoutClassroomInput, ClassroomNotificationUncheckedCreateWithoutClassroomInput> | ClassroomNotificationCreateWithoutClassroomInput[] | ClassroomNotificationUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutClassroomInput | ClassroomNotificationCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomNotificationCreateManyClassroomInputEnvelope
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
  }

  export type ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomMemberCreateWithoutClassroomInput, ClassroomMemberUncheckedCreateWithoutClassroomInput> | ClassroomMemberCreateWithoutClassroomInput[] | ClassroomMemberUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutClassroomInput | ClassroomMemberCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomMemberCreateManyClassroomInputEnvelope
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
  }

  export type ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutClassroomInput, ClassroomJoinRequestUncheckedCreateWithoutClassroomInput> | ClassroomJoinRequestCreateWithoutClassroomInput[] | ClassroomJoinRequestUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutClassroomInput | ClassroomJoinRequestCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomJoinRequestCreateManyClassroomInputEnvelope
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
  }

  export type DailyGoalUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<DailyGoalCreateWithoutClassroomInput, DailyGoalUncheckedCreateWithoutClassroomInput> | DailyGoalCreateWithoutClassroomInput[] | DailyGoalUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutClassroomInput | DailyGoalCreateOrConnectWithoutClassroomInput[]
    createMany?: DailyGoalCreateManyClassroomInputEnvelope
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
  }

  export type DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<DailyReflectionCreateWithoutClassroomInput, DailyReflectionUncheckedCreateWithoutClassroomInput> | DailyReflectionCreateWithoutClassroomInput[] | DailyReflectionUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutClassroomInput | DailyReflectionCreateOrConnectWithoutClassroomInput[]
    createMany?: DailyReflectionCreateManyClassroomInputEnvelope
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
  }

  export type ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomNotificationCreateWithoutClassroomInput, ClassroomNotificationUncheckedCreateWithoutClassroomInput> | ClassroomNotificationCreateWithoutClassroomInput[] | ClassroomNotificationUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutClassroomInput | ClassroomNotificationCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomNotificationCreateManyClassroomInputEnvelope
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutHostedClassroomsNestedInput = {
    create?: XOR<UserCreateWithoutHostedClassroomsInput, UserUncheckedCreateWithoutHostedClassroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedClassroomsInput
    upsert?: UserUpsertWithoutHostedClassroomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostedClassroomsInput, UserUpdateWithoutHostedClassroomsInput>, UserUncheckedUpdateWithoutHostedClassroomsInput>
  }

  export type ClassroomMemberUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomMemberCreateWithoutClassroomInput, ClassroomMemberUncheckedCreateWithoutClassroomInput> | ClassroomMemberCreateWithoutClassroomInput[] | ClassroomMemberUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutClassroomInput | ClassroomMemberCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput | ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomMemberCreateManyClassroomInputEnvelope
    set?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    disconnect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    delete?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    update?: ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput | ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomMemberUpdateManyWithWhereWithoutClassroomInput | ClassroomMemberUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomMemberScalarWhereInput | ClassroomMemberScalarWhereInput[]
  }

  export type ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutClassroomInput, ClassroomJoinRequestUncheckedCreateWithoutClassroomInput> | ClassroomJoinRequestCreateWithoutClassroomInput[] | ClassroomJoinRequestUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutClassroomInput | ClassroomJoinRequestCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomJoinRequestUpsertWithWhereUniqueWithoutClassroomInput | ClassroomJoinRequestUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomJoinRequestCreateManyClassroomInputEnvelope
    set?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    disconnect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    delete?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    update?: ClassroomJoinRequestUpdateWithWhereUniqueWithoutClassroomInput | ClassroomJoinRequestUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomJoinRequestUpdateManyWithWhereWithoutClassroomInput | ClassroomJoinRequestUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomJoinRequestScalarWhereInput | ClassroomJoinRequestScalarWhereInput[]
  }

  export type DailyGoalUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<DailyGoalCreateWithoutClassroomInput, DailyGoalUncheckedCreateWithoutClassroomInput> | DailyGoalCreateWithoutClassroomInput[] | DailyGoalUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutClassroomInput | DailyGoalCreateOrConnectWithoutClassroomInput[]
    upsert?: DailyGoalUpsertWithWhereUniqueWithoutClassroomInput | DailyGoalUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: DailyGoalCreateManyClassroomInputEnvelope
    set?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    disconnect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    delete?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    update?: DailyGoalUpdateWithWhereUniqueWithoutClassroomInput | DailyGoalUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: DailyGoalUpdateManyWithWhereWithoutClassroomInput | DailyGoalUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: DailyGoalScalarWhereInput | DailyGoalScalarWhereInput[]
  }

  export type DailyReflectionUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<DailyReflectionCreateWithoutClassroomInput, DailyReflectionUncheckedCreateWithoutClassroomInput> | DailyReflectionCreateWithoutClassroomInput[] | DailyReflectionUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutClassroomInput | DailyReflectionCreateOrConnectWithoutClassroomInput[]
    upsert?: DailyReflectionUpsertWithWhereUniqueWithoutClassroomInput | DailyReflectionUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: DailyReflectionCreateManyClassroomInputEnvelope
    set?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    disconnect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    delete?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    update?: DailyReflectionUpdateWithWhereUniqueWithoutClassroomInput | DailyReflectionUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: DailyReflectionUpdateManyWithWhereWithoutClassroomInput | DailyReflectionUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: DailyReflectionScalarWhereInput | DailyReflectionScalarWhereInput[]
  }

  export type ClassroomNotificationUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomNotificationCreateWithoutClassroomInput, ClassroomNotificationUncheckedCreateWithoutClassroomInput> | ClassroomNotificationCreateWithoutClassroomInput[] | ClassroomNotificationUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutClassroomInput | ClassroomNotificationCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomNotificationUpsertWithWhereUniqueWithoutClassroomInput | ClassroomNotificationUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomNotificationCreateManyClassroomInputEnvelope
    set?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    disconnect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    delete?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    update?: ClassroomNotificationUpdateWithWhereUniqueWithoutClassroomInput | ClassroomNotificationUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomNotificationUpdateManyWithWhereWithoutClassroomInput | ClassroomNotificationUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomNotificationScalarWhereInput | ClassroomNotificationScalarWhereInput[]
  }

  export type ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomMemberCreateWithoutClassroomInput, ClassroomMemberUncheckedCreateWithoutClassroomInput> | ClassroomMemberCreateWithoutClassroomInput[] | ClassroomMemberUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMemberCreateOrConnectWithoutClassroomInput | ClassroomMemberCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput | ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomMemberCreateManyClassroomInputEnvelope
    set?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    disconnect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    delete?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    connect?: ClassroomMemberWhereUniqueInput | ClassroomMemberWhereUniqueInput[]
    update?: ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput | ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomMemberUpdateManyWithWhereWithoutClassroomInput | ClassroomMemberUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomMemberScalarWhereInput | ClassroomMemberScalarWhereInput[]
  }

  export type ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomJoinRequestCreateWithoutClassroomInput, ClassroomJoinRequestUncheckedCreateWithoutClassroomInput> | ClassroomJoinRequestCreateWithoutClassroomInput[] | ClassroomJoinRequestUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomJoinRequestCreateOrConnectWithoutClassroomInput | ClassroomJoinRequestCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomJoinRequestUpsertWithWhereUniqueWithoutClassroomInput | ClassroomJoinRequestUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomJoinRequestCreateManyClassroomInputEnvelope
    set?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    disconnect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    delete?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    connect?: ClassroomJoinRequestWhereUniqueInput | ClassroomJoinRequestWhereUniqueInput[]
    update?: ClassroomJoinRequestUpdateWithWhereUniqueWithoutClassroomInput | ClassroomJoinRequestUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomJoinRequestUpdateManyWithWhereWithoutClassroomInput | ClassroomJoinRequestUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomJoinRequestScalarWhereInput | ClassroomJoinRequestScalarWhereInput[]
  }

  export type DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<DailyGoalCreateWithoutClassroomInput, DailyGoalUncheckedCreateWithoutClassroomInput> | DailyGoalCreateWithoutClassroomInput[] | DailyGoalUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyGoalCreateOrConnectWithoutClassroomInput | DailyGoalCreateOrConnectWithoutClassroomInput[]
    upsert?: DailyGoalUpsertWithWhereUniqueWithoutClassroomInput | DailyGoalUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: DailyGoalCreateManyClassroomInputEnvelope
    set?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    disconnect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    delete?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    connect?: DailyGoalWhereUniqueInput | DailyGoalWhereUniqueInput[]
    update?: DailyGoalUpdateWithWhereUniqueWithoutClassroomInput | DailyGoalUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: DailyGoalUpdateManyWithWhereWithoutClassroomInput | DailyGoalUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: DailyGoalScalarWhereInput | DailyGoalScalarWhereInput[]
  }

  export type DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<DailyReflectionCreateWithoutClassroomInput, DailyReflectionUncheckedCreateWithoutClassroomInput> | DailyReflectionCreateWithoutClassroomInput[] | DailyReflectionUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: DailyReflectionCreateOrConnectWithoutClassroomInput | DailyReflectionCreateOrConnectWithoutClassroomInput[]
    upsert?: DailyReflectionUpsertWithWhereUniqueWithoutClassroomInput | DailyReflectionUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: DailyReflectionCreateManyClassroomInputEnvelope
    set?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    disconnect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    delete?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    connect?: DailyReflectionWhereUniqueInput | DailyReflectionWhereUniqueInput[]
    update?: DailyReflectionUpdateWithWhereUniqueWithoutClassroomInput | DailyReflectionUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: DailyReflectionUpdateManyWithWhereWithoutClassroomInput | DailyReflectionUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: DailyReflectionScalarWhereInput | DailyReflectionScalarWhereInput[]
  }

  export type ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomNotificationCreateWithoutClassroomInput, ClassroomNotificationUncheckedCreateWithoutClassroomInput> | ClassroomNotificationCreateWithoutClassroomInput[] | ClassroomNotificationUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutClassroomInput | ClassroomNotificationCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomNotificationUpsertWithWhereUniqueWithoutClassroomInput | ClassroomNotificationUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomNotificationCreateManyClassroomInputEnvelope
    set?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    disconnect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    delete?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    connect?: ClassroomNotificationWhereUniqueInput | ClassroomNotificationWhereUniqueInput[]
    update?: ClassroomNotificationUpdateWithWhereUniqueWithoutClassroomInput | ClassroomNotificationUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomNotificationUpdateManyWithWhereWithoutClassroomInput | ClassroomNotificationUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomNotificationScalarWhereInput | ClassroomNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutMembersInput = {
    create?: XOR<ClassroomCreateWithoutMembersInput, ClassroomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutMembersInput
    connect?: ClassroomWhereUniqueInput
  }

  export type EnumMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.MemberRole
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type ClassroomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ClassroomCreateWithoutMembersInput, ClassroomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutMembersInput
    upsert?: ClassroomUpsertWithoutMembersInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutMembersInput, ClassroomUpdateWithoutMembersInput>, ClassroomUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutClassroomJoinRequestsInput = {
    create?: XOR<UserCreateWithoutClassroomJoinRequestsInput, UserUncheckedCreateWithoutClassroomJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassroomJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<ClassroomCreateWithoutJoinRequestsInput, ClassroomUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutJoinRequestsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type EnumJoinRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.JoinRequestStatus
  }

  export type UserUpdateOneRequiredWithoutClassroomJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutClassroomJoinRequestsInput, UserUncheckedCreateWithoutClassroomJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassroomJoinRequestsInput
    upsert?: UserUpsertWithoutClassroomJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassroomJoinRequestsInput, UserUpdateWithoutClassroomJoinRequestsInput>, UserUncheckedUpdateWithoutClassroomJoinRequestsInput>
  }

  export type ClassroomUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<ClassroomCreateWithoutJoinRequestsInput, ClassroomUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutJoinRequestsInput
    upsert?: ClassroomUpsertWithoutJoinRequestsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutJoinRequestsInput, ClassroomUpdateWithoutJoinRequestsInput>, ClassroomUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserCreateNestedOneWithoutDailyGoalsInput = {
    create?: XOR<UserCreateWithoutDailyGoalsInput, UserUncheckedCreateWithoutDailyGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutDailyGoalsInput = {
    create?: XOR<ClassroomCreateWithoutDailyGoalsInput, ClassroomUncheckedCreateWithoutDailyGoalsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutDailyGoalsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type DailyGoalTaskCreateNestedManyWithoutDailyGoalInput = {
    create?: XOR<DailyGoalTaskCreateWithoutDailyGoalInput, DailyGoalTaskUncheckedCreateWithoutDailyGoalInput> | DailyGoalTaskCreateWithoutDailyGoalInput[] | DailyGoalTaskUncheckedCreateWithoutDailyGoalInput[]
    connectOrCreate?: DailyGoalTaskCreateOrConnectWithoutDailyGoalInput | DailyGoalTaskCreateOrConnectWithoutDailyGoalInput[]
    createMany?: DailyGoalTaskCreateManyDailyGoalInputEnvelope
    connect?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
  }

  export type DailyGoalTaskUncheckedCreateNestedManyWithoutDailyGoalInput = {
    create?: XOR<DailyGoalTaskCreateWithoutDailyGoalInput, DailyGoalTaskUncheckedCreateWithoutDailyGoalInput> | DailyGoalTaskCreateWithoutDailyGoalInput[] | DailyGoalTaskUncheckedCreateWithoutDailyGoalInput[]
    connectOrCreate?: DailyGoalTaskCreateOrConnectWithoutDailyGoalInput | DailyGoalTaskCreateOrConnectWithoutDailyGoalInput[]
    createMany?: DailyGoalTaskCreateManyDailyGoalInputEnvelope
    connect?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDailyGoalsNestedInput = {
    create?: XOR<UserCreateWithoutDailyGoalsInput, UserUncheckedCreateWithoutDailyGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyGoalsInput
    upsert?: UserUpsertWithoutDailyGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyGoalsInput, UserUpdateWithoutDailyGoalsInput>, UserUncheckedUpdateWithoutDailyGoalsInput>
  }

  export type ClassroomUpdateOneRequiredWithoutDailyGoalsNestedInput = {
    create?: XOR<ClassroomCreateWithoutDailyGoalsInput, ClassroomUncheckedCreateWithoutDailyGoalsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutDailyGoalsInput
    upsert?: ClassroomUpsertWithoutDailyGoalsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutDailyGoalsInput, ClassroomUpdateWithoutDailyGoalsInput>, ClassroomUncheckedUpdateWithoutDailyGoalsInput>
  }

  export type DailyGoalTaskUpdateManyWithoutDailyGoalNestedInput = {
    create?: XOR<DailyGoalTaskCreateWithoutDailyGoalInput, DailyGoalTaskUncheckedCreateWithoutDailyGoalInput> | DailyGoalTaskCreateWithoutDailyGoalInput[] | DailyGoalTaskUncheckedCreateWithoutDailyGoalInput[]
    connectOrCreate?: DailyGoalTaskCreateOrConnectWithoutDailyGoalInput | DailyGoalTaskCreateOrConnectWithoutDailyGoalInput[]
    upsert?: DailyGoalTaskUpsertWithWhereUniqueWithoutDailyGoalInput | DailyGoalTaskUpsertWithWhereUniqueWithoutDailyGoalInput[]
    createMany?: DailyGoalTaskCreateManyDailyGoalInputEnvelope
    set?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    disconnect?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    delete?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    connect?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    update?: DailyGoalTaskUpdateWithWhereUniqueWithoutDailyGoalInput | DailyGoalTaskUpdateWithWhereUniqueWithoutDailyGoalInput[]
    updateMany?: DailyGoalTaskUpdateManyWithWhereWithoutDailyGoalInput | DailyGoalTaskUpdateManyWithWhereWithoutDailyGoalInput[]
    deleteMany?: DailyGoalTaskScalarWhereInput | DailyGoalTaskScalarWhereInput[]
  }

  export type DailyGoalTaskUncheckedUpdateManyWithoutDailyGoalNestedInput = {
    create?: XOR<DailyGoalTaskCreateWithoutDailyGoalInput, DailyGoalTaskUncheckedCreateWithoutDailyGoalInput> | DailyGoalTaskCreateWithoutDailyGoalInput[] | DailyGoalTaskUncheckedCreateWithoutDailyGoalInput[]
    connectOrCreate?: DailyGoalTaskCreateOrConnectWithoutDailyGoalInput | DailyGoalTaskCreateOrConnectWithoutDailyGoalInput[]
    upsert?: DailyGoalTaskUpsertWithWhereUniqueWithoutDailyGoalInput | DailyGoalTaskUpsertWithWhereUniqueWithoutDailyGoalInput[]
    createMany?: DailyGoalTaskCreateManyDailyGoalInputEnvelope
    set?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    disconnect?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    delete?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    connect?: DailyGoalTaskWhereUniqueInput | DailyGoalTaskWhereUniqueInput[]
    update?: DailyGoalTaskUpdateWithWhereUniqueWithoutDailyGoalInput | DailyGoalTaskUpdateWithWhereUniqueWithoutDailyGoalInput[]
    updateMany?: DailyGoalTaskUpdateManyWithWhereWithoutDailyGoalInput | DailyGoalTaskUpdateManyWithWhereWithoutDailyGoalInput[]
    deleteMany?: DailyGoalTaskScalarWhereInput | DailyGoalTaskScalarWhereInput[]
  }

  export type DailyGoalCreateNestedOneWithoutTasksInput = {
    create?: XOR<DailyGoalCreateWithoutTasksInput, DailyGoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DailyGoalCreateOrConnectWithoutTasksInput
    connect?: DailyGoalWhereUniqueInput
  }

  export type DailyGoalUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<DailyGoalCreateWithoutTasksInput, DailyGoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DailyGoalCreateOrConnectWithoutTasksInput
    upsert?: DailyGoalUpsertWithoutTasksInput
    connect?: DailyGoalWhereUniqueInput
    update?: XOR<XOR<DailyGoalUpdateToOneWithWhereWithoutTasksInput, DailyGoalUpdateWithoutTasksInput>, DailyGoalUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutDailyReflectionsInput = {
    create?: XOR<UserCreateWithoutDailyReflectionsInput, UserUncheckedCreateWithoutDailyReflectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReflectionsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutDailyReflectionsInput = {
    create?: XOR<ClassroomCreateWithoutDailyReflectionsInput, ClassroomUncheckedCreateWithoutDailyReflectionsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutDailyReflectionsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutDailyReflectionsNestedInput = {
    create?: XOR<UserCreateWithoutDailyReflectionsInput, UserUncheckedCreateWithoutDailyReflectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReflectionsInput
    upsert?: UserUpsertWithoutDailyReflectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyReflectionsInput, UserUpdateWithoutDailyReflectionsInput>, UserUncheckedUpdateWithoutDailyReflectionsInput>
  }

  export type ClassroomUpdateOneRequiredWithoutDailyReflectionsNestedInput = {
    create?: XOR<ClassroomCreateWithoutDailyReflectionsInput, ClassroomUncheckedCreateWithoutDailyReflectionsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutDailyReflectionsInput
    upsert?: ClassroomUpsertWithoutDailyReflectionsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutDailyReflectionsInput, ClassroomUpdateWithoutDailyReflectionsInput>, ClassroomUncheckedUpdateWithoutDailyReflectionsInput>
  }

  export type ClassroomCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ClassroomCreateWithoutNotificationsInput, ClassroomUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutNotificationsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsCreatedInput = {
    create?: XOR<UserCreateWithoutNotificationsCreatedInput, UserUncheckedCreateWithoutNotificationsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomNotificationReadCreateNestedManyWithoutNotificationInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutNotificationInput, ClassroomNotificationReadUncheckedCreateWithoutNotificationInput> | ClassroomNotificationReadCreateWithoutNotificationInput[] | ClassroomNotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutNotificationInput | ClassroomNotificationReadCreateOrConnectWithoutNotificationInput[]
    createMany?: ClassroomNotificationReadCreateManyNotificationInputEnvelope
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
  }

  export type ClassroomNotificationReadUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutNotificationInput, ClassroomNotificationReadUncheckedCreateWithoutNotificationInput> | ClassroomNotificationReadCreateWithoutNotificationInput[] | ClassroomNotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutNotificationInput | ClassroomNotificationReadCreateOrConnectWithoutNotificationInput[]
    createMany?: ClassroomNotificationReadCreateManyNotificationInputEnvelope
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
  }

  export type ClassroomUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<ClassroomCreateWithoutNotificationsInput, ClassroomUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutNotificationsInput
    upsert?: ClassroomUpsertWithoutNotificationsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutNotificationsInput, ClassroomUpdateWithoutNotificationsInput>, ClassroomUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneWithoutNotificationsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsCreatedInput, UserUncheckedCreateWithoutNotificationsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsCreatedInput
    upsert?: UserUpsertWithoutNotificationsCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsCreatedInput, UserUpdateWithoutNotificationsCreatedInput>, UserUncheckedUpdateWithoutNotificationsCreatedInput>
  }

  export type ClassroomNotificationReadUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutNotificationInput, ClassroomNotificationReadUncheckedCreateWithoutNotificationInput> | ClassroomNotificationReadCreateWithoutNotificationInput[] | ClassroomNotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutNotificationInput | ClassroomNotificationReadCreateOrConnectWithoutNotificationInput[]
    upsert?: ClassroomNotificationReadUpsertWithWhereUniqueWithoutNotificationInput | ClassroomNotificationReadUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: ClassroomNotificationReadCreateManyNotificationInputEnvelope
    set?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    disconnect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    delete?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    update?: ClassroomNotificationReadUpdateWithWhereUniqueWithoutNotificationInput | ClassroomNotificationReadUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: ClassroomNotificationReadUpdateManyWithWhereWithoutNotificationInput | ClassroomNotificationReadUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: ClassroomNotificationReadScalarWhereInput | ClassroomNotificationReadScalarWhereInput[]
  }

  export type ClassroomNotificationReadUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<ClassroomNotificationReadCreateWithoutNotificationInput, ClassroomNotificationReadUncheckedCreateWithoutNotificationInput> | ClassroomNotificationReadCreateWithoutNotificationInput[] | ClassroomNotificationReadUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ClassroomNotificationReadCreateOrConnectWithoutNotificationInput | ClassroomNotificationReadCreateOrConnectWithoutNotificationInput[]
    upsert?: ClassroomNotificationReadUpsertWithWhereUniqueWithoutNotificationInput | ClassroomNotificationReadUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: ClassroomNotificationReadCreateManyNotificationInputEnvelope
    set?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    disconnect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    delete?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    connect?: ClassroomNotificationReadWhereUniqueInput | ClassroomNotificationReadWhereUniqueInput[]
    update?: ClassroomNotificationReadUpdateWithWhereUniqueWithoutNotificationInput | ClassroomNotificationReadUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: ClassroomNotificationReadUpdateManyWithWhereWithoutNotificationInput | ClassroomNotificationReadUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: ClassroomNotificationReadScalarWhereInput | ClassroomNotificationReadScalarWhereInput[]
  }

  export type ClassroomNotificationCreateNestedOneWithoutReadsInput = {
    create?: XOR<ClassroomNotificationCreateWithoutReadsInput, ClassroomNotificationUncheckedCreateWithoutReadsInput>
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutReadsInput
    connect?: ClassroomNotificationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationReadsInput = {
    create?: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationReadsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassroomNotificationUpdateOneRequiredWithoutReadsNestedInput = {
    create?: XOR<ClassroomNotificationCreateWithoutReadsInput, ClassroomNotificationUncheckedCreateWithoutReadsInput>
    connectOrCreate?: ClassroomNotificationCreateOrConnectWithoutReadsInput
    upsert?: ClassroomNotificationUpsertWithoutReadsInput
    connect?: ClassroomNotificationWhereUniqueInput
    update?: XOR<XOR<ClassroomNotificationUpdateToOneWithWhereWithoutReadsInput, ClassroomNotificationUpdateWithoutReadsInput>, ClassroomNotificationUncheckedUpdateWithoutReadsInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationReadsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationReadsInput
    upsert?: UserUpsertWithoutNotificationReadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationReadsInput, UserUpdateWithoutNotificationReadsInput>, UserUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusFilter<$PrismaModel> | $Enums.JoinRequestStatus
  }

  export type NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClassroomCreateWithoutHostInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutHostInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutHostInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutHostInput, ClassroomUncheckedCreateWithoutHostInput>
  }

  export type ClassroomCreateManyHostInputEnvelope = {
    data: ClassroomCreateManyHostInput | ClassroomCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutMembersInput
  }

  export type ClassroomMemberUncheckedCreateWithoutUserInput = {
    id?: string
    classroomId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type ClassroomMemberCreateOrConnectWithoutUserInput = {
    where: ClassroomMemberWhereUniqueInput
    create: XOR<ClassroomMemberCreateWithoutUserInput, ClassroomMemberUncheckedCreateWithoutUserInput>
  }

  export type ClassroomMemberCreateManyUserInputEnvelope = {
    data: ClassroomMemberCreateManyUserInput | ClassroomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomJoinRequestCreateWithoutUserInput = {
    id?: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutJoinRequestsInput
  }

  export type ClassroomJoinRequestUncheckedCreateWithoutUserInput = {
    id?: string
    classroomId: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomJoinRequestCreateOrConnectWithoutUserInput = {
    where: ClassroomJoinRequestWhereUniqueInput
    create: XOR<ClassroomJoinRequestCreateWithoutUserInput, ClassroomJoinRequestUncheckedCreateWithoutUserInput>
  }

  export type ClassroomJoinRequestCreateManyUserInputEnvelope = {
    data: ClassroomJoinRequestCreateManyUserInput | ClassroomJoinRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyGoalCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutDailyGoalsInput
    tasks?: DailyGoalTaskCreateNestedManyWithoutDailyGoalInput
  }

  export type DailyGoalUncheckedCreateWithoutUserInput = {
    id?: string
    classroomId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: DailyGoalTaskUncheckedCreateNestedManyWithoutDailyGoalInput
  }

  export type DailyGoalCreateOrConnectWithoutUserInput = {
    where: DailyGoalWhereUniqueInput
    create: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
  }

  export type DailyGoalCreateManyUserInputEnvelope = {
    data: DailyGoalCreateManyUserInput | DailyGoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyReflectionCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutDailyReflectionsInput
  }

  export type DailyReflectionUncheckedCreateWithoutUserInput = {
    id?: string
    classroomId: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReflectionCreateOrConnectWithoutUserInput = {
    where: DailyReflectionWhereUniqueInput
    create: XOR<DailyReflectionCreateWithoutUserInput, DailyReflectionUncheckedCreateWithoutUserInput>
  }

  export type DailyReflectionCreateManyUserInputEnvelope = {
    data: DailyReflectionCreateManyUserInput | DailyReflectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomNotificationCreateWithoutCreatedByInput = {
    id?: string
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutNotificationsInput
    reads?: ClassroomNotificationReadCreateNestedManyWithoutNotificationInput
  }

  export type ClassroomNotificationUncheckedCreateWithoutCreatedByInput = {
    id?: string
    classroomId: string
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    reads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type ClassroomNotificationCreateOrConnectWithoutCreatedByInput = {
    where: ClassroomNotificationWhereUniqueInput
    create: XOR<ClassroomNotificationCreateWithoutCreatedByInput, ClassroomNotificationUncheckedCreateWithoutCreatedByInput>
  }

  export type ClassroomNotificationCreateManyCreatedByInputEnvelope = {
    data: ClassroomNotificationCreateManyCreatedByInput | ClassroomNotificationCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomNotificationReadCreateWithoutUserInput = {
    readAt?: Date | string
    notification: ClassroomNotificationCreateNestedOneWithoutReadsInput
  }

  export type ClassroomNotificationReadUncheckedCreateWithoutUserInput = {
    notificationId: string
    readAt?: Date | string
  }

  export type ClassroomNotificationReadCreateOrConnectWithoutUserInput = {
    where: ClassroomNotificationReadWhereUniqueInput
    create: XOR<ClassroomNotificationReadCreateWithoutUserInput, ClassroomNotificationReadUncheckedCreateWithoutUserInput>
  }

  export type ClassroomNotificationReadCreateManyUserInputEnvelope = {
    data: ClassroomNotificationReadCreateManyUserInput | ClassroomNotificationReadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithWhereUniqueWithoutHostInput = {
    where: ClassroomWhereUniqueInput
    update: XOR<ClassroomUpdateWithoutHostInput, ClassroomUncheckedUpdateWithoutHostInput>
    create: XOR<ClassroomCreateWithoutHostInput, ClassroomUncheckedCreateWithoutHostInput>
  }

  export type ClassroomUpdateWithWhereUniqueWithoutHostInput = {
    where: ClassroomWhereUniqueInput
    data: XOR<ClassroomUpdateWithoutHostInput, ClassroomUncheckedUpdateWithoutHostInput>
  }

  export type ClassroomUpdateManyWithWhereWithoutHostInput = {
    where: ClassroomScalarWhereInput
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyWithoutHostInput>
  }

  export type ClassroomScalarWhereInput = {
    AND?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    OR?: ClassroomScalarWhereInput[]
    NOT?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    id?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    description?: StringNullableFilter<"Classroom"> | string | null
    joinCode?: StringFilter<"Classroom"> | string
    hostId?: StringFilter<"Classroom"> | string
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    dailyGoal?: StringNullableFilter<"Classroom"> | string | null
    goalSettingTime?: StringNullableFilter<"Classroom"> | string | null
    reflectionTime?: StringNullableFilter<"Classroom"> | string | null
    tasksPerDay?: IntFilter<"Classroom"> | number
    dayParts?: JsonNullableFilter<"Classroom">
    timezone?: StringFilter<"Classroom"> | string
    allowLateGoalEdits?: BoolFilter<"Classroom"> | boolean
  }

  export type ClassroomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassroomMemberWhereUniqueInput
    update: XOR<ClassroomMemberUpdateWithoutUserInput, ClassroomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ClassroomMemberCreateWithoutUserInput, ClassroomMemberUncheckedCreateWithoutUserInput>
  }

  export type ClassroomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassroomMemberWhereUniqueInput
    data: XOR<ClassroomMemberUpdateWithoutUserInput, ClassroomMemberUncheckedUpdateWithoutUserInput>
  }

  export type ClassroomMemberUpdateManyWithWhereWithoutUserInput = {
    where: ClassroomMemberScalarWhereInput
    data: XOR<ClassroomMemberUpdateManyMutationInput, ClassroomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassroomMemberScalarWhereInput = {
    AND?: ClassroomMemberScalarWhereInput | ClassroomMemberScalarWhereInput[]
    OR?: ClassroomMemberScalarWhereInput[]
    NOT?: ClassroomMemberScalarWhereInput | ClassroomMemberScalarWhereInput[]
    id?: StringFilter<"ClassroomMember"> | string
    userId?: StringFilter<"ClassroomMember"> | string
    classroomId?: StringFilter<"ClassroomMember"> | string
    role?: EnumMemberRoleFilter<"ClassroomMember"> | $Enums.MemberRole
    joinedAt?: DateTimeFilter<"ClassroomMember"> | Date | string
  }

  export type ClassroomJoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassroomJoinRequestWhereUniqueInput
    update: XOR<ClassroomJoinRequestUpdateWithoutUserInput, ClassroomJoinRequestUncheckedUpdateWithoutUserInput>
    create: XOR<ClassroomJoinRequestCreateWithoutUserInput, ClassroomJoinRequestUncheckedCreateWithoutUserInput>
  }

  export type ClassroomJoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassroomJoinRequestWhereUniqueInput
    data: XOR<ClassroomJoinRequestUpdateWithoutUserInput, ClassroomJoinRequestUncheckedUpdateWithoutUserInput>
  }

  export type ClassroomJoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: ClassroomJoinRequestScalarWhereInput
    data: XOR<ClassroomJoinRequestUpdateManyMutationInput, ClassroomJoinRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassroomJoinRequestScalarWhereInput = {
    AND?: ClassroomJoinRequestScalarWhereInput | ClassroomJoinRequestScalarWhereInput[]
    OR?: ClassroomJoinRequestScalarWhereInput[]
    NOT?: ClassroomJoinRequestScalarWhereInput | ClassroomJoinRequestScalarWhereInput[]
    id?: StringFilter<"ClassroomJoinRequest"> | string
    userId?: StringFilter<"ClassroomJoinRequest"> | string
    classroomId?: StringFilter<"ClassroomJoinRequest"> | string
    status?: EnumJoinRequestStatusFilter<"ClassroomJoinRequest"> | $Enums.JoinRequestStatus
    createdAt?: DateTimeFilter<"ClassroomJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomJoinRequest"> | Date | string
  }

  export type DailyGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyGoalWhereUniqueInput
    update: XOR<DailyGoalUpdateWithoutUserInput, DailyGoalUncheckedUpdateWithoutUserInput>
    create: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
  }

  export type DailyGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyGoalWhereUniqueInput
    data: XOR<DailyGoalUpdateWithoutUserInput, DailyGoalUncheckedUpdateWithoutUserInput>
  }

  export type DailyGoalUpdateManyWithWhereWithoutUserInput = {
    where: DailyGoalScalarWhereInput
    data: XOR<DailyGoalUpdateManyMutationInput, DailyGoalUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyGoalScalarWhereInput = {
    AND?: DailyGoalScalarWhereInput | DailyGoalScalarWhereInput[]
    OR?: DailyGoalScalarWhereInput[]
    NOT?: DailyGoalScalarWhereInput | DailyGoalScalarWhereInput[]
    id?: StringFilter<"DailyGoal"> | string
    userId?: StringFilter<"DailyGoal"> | string
    classroomId?: StringFilter<"DailyGoal"> | string
    date?: DateTimeFilter<"DailyGoal"> | Date | string
    statement?: StringNullableFilter<"DailyGoal"> | string | null
    createdAt?: DateTimeFilter<"DailyGoal"> | Date | string
    updatedAt?: DateTimeFilter<"DailyGoal"> | Date | string
  }

  export type DailyReflectionUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyReflectionWhereUniqueInput
    update: XOR<DailyReflectionUpdateWithoutUserInput, DailyReflectionUncheckedUpdateWithoutUserInput>
    create: XOR<DailyReflectionCreateWithoutUserInput, DailyReflectionUncheckedCreateWithoutUserInput>
  }

  export type DailyReflectionUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyReflectionWhereUniqueInput
    data: XOR<DailyReflectionUpdateWithoutUserInput, DailyReflectionUncheckedUpdateWithoutUserInput>
  }

  export type DailyReflectionUpdateManyWithWhereWithoutUserInput = {
    where: DailyReflectionScalarWhereInput
    data: XOR<DailyReflectionUpdateManyMutationInput, DailyReflectionUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyReflectionScalarWhereInput = {
    AND?: DailyReflectionScalarWhereInput | DailyReflectionScalarWhereInput[]
    OR?: DailyReflectionScalarWhereInput[]
    NOT?: DailyReflectionScalarWhereInput | DailyReflectionScalarWhereInput[]
    id?: StringFilter<"DailyReflection"> | string
    userId?: StringFilter<"DailyReflection"> | string
    classroomId?: StringFilter<"DailyReflection"> | string
    date?: DateTimeFilter<"DailyReflection"> | Date | string
    content?: StringFilter<"DailyReflection"> | string
    assessmentScore?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentCorrect?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentTotal?: IntNullableFilter<"DailyReflection"> | number | null
    assessmentDetails?: JsonNullableFilter<"DailyReflection">
    assessedAt?: DateTimeNullableFilter<"DailyReflection"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyReflection"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReflection"> | Date | string
  }

  export type ClassroomNotificationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ClassroomNotificationWhereUniqueInput
    update: XOR<ClassroomNotificationUpdateWithoutCreatedByInput, ClassroomNotificationUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ClassroomNotificationCreateWithoutCreatedByInput, ClassroomNotificationUncheckedCreateWithoutCreatedByInput>
  }

  export type ClassroomNotificationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ClassroomNotificationWhereUniqueInput
    data: XOR<ClassroomNotificationUpdateWithoutCreatedByInput, ClassroomNotificationUncheckedUpdateWithoutCreatedByInput>
  }

  export type ClassroomNotificationUpdateManyWithWhereWithoutCreatedByInput = {
    where: ClassroomNotificationScalarWhereInput
    data: XOR<ClassroomNotificationUpdateManyMutationInput, ClassroomNotificationUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClassroomNotificationScalarWhereInput = {
    AND?: ClassroomNotificationScalarWhereInput | ClassroomNotificationScalarWhereInput[]
    OR?: ClassroomNotificationScalarWhereInput[]
    NOT?: ClassroomNotificationScalarWhereInput | ClassroomNotificationScalarWhereInput[]
    id?: StringFilter<"ClassroomNotification"> | string
    classroomId?: StringFilter<"ClassroomNotification"> | string
    createdById?: StringNullableFilter<"ClassroomNotification"> | string | null
    recipientEmail?: StringNullableFilter<"ClassroomNotification"> | string | null
    type?: StringFilter<"ClassroomNotification"> | string
    title?: StringFilter<"ClassroomNotification"> | string
    content?: StringFilter<"ClassroomNotification"> | string
    createdAt?: DateTimeFilter<"ClassroomNotification"> | Date | string
  }

  export type ClassroomNotificationReadUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassroomNotificationReadWhereUniqueInput
    update: XOR<ClassroomNotificationReadUpdateWithoutUserInput, ClassroomNotificationReadUncheckedUpdateWithoutUserInput>
    create: XOR<ClassroomNotificationReadCreateWithoutUserInput, ClassroomNotificationReadUncheckedCreateWithoutUserInput>
  }

  export type ClassroomNotificationReadUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassroomNotificationReadWhereUniqueInput
    data: XOR<ClassroomNotificationReadUpdateWithoutUserInput, ClassroomNotificationReadUncheckedUpdateWithoutUserInput>
  }

  export type ClassroomNotificationReadUpdateManyWithWhereWithoutUserInput = {
    where: ClassroomNotificationReadScalarWhereInput
    data: XOR<ClassroomNotificationReadUpdateManyMutationInput, ClassroomNotificationReadUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassroomNotificationReadScalarWhereInput = {
    AND?: ClassroomNotificationReadScalarWhereInput | ClassroomNotificationReadScalarWhereInput[]
    OR?: ClassroomNotificationReadScalarWhereInput[]
    NOT?: ClassroomNotificationReadScalarWhereInput | ClassroomNotificationReadScalarWhereInput[]
    notificationId?: StringFilter<"ClassroomNotificationRead"> | string
    userId?: StringFilter<"ClassroomNotificationRead"> | string
    readAt?: DateTimeFilter<"ClassroomNotificationRead"> | Date | string
  }

  export type UserCreateWithoutHostedClassroomsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHostedClassroomsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHostedClassroomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostedClassroomsInput, UserUncheckedCreateWithoutHostedClassroomsInput>
  }

  export type ClassroomMemberCreateWithoutClassroomInput = {
    id?: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type ClassroomMemberUncheckedCreateWithoutClassroomInput = {
    id?: string
    userId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type ClassroomMemberCreateOrConnectWithoutClassroomInput = {
    where: ClassroomMemberWhereUniqueInput
    create: XOR<ClassroomMemberCreateWithoutClassroomInput, ClassroomMemberUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomMemberCreateManyClassroomInputEnvelope = {
    data: ClassroomMemberCreateManyClassroomInput | ClassroomMemberCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomJoinRequestCreateWithoutClassroomInput = {
    id?: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClassroomJoinRequestsInput
  }

  export type ClassroomJoinRequestUncheckedCreateWithoutClassroomInput = {
    id?: string
    userId: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomJoinRequestCreateOrConnectWithoutClassroomInput = {
    where: ClassroomJoinRequestWhereUniqueInput
    create: XOR<ClassroomJoinRequestCreateWithoutClassroomInput, ClassroomJoinRequestUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomJoinRequestCreateManyClassroomInputEnvelope = {
    data: ClassroomJoinRequestCreateManyClassroomInput | ClassroomJoinRequestCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type DailyGoalCreateWithoutClassroomInput = {
    id?: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyGoalsInput
    tasks?: DailyGoalTaskCreateNestedManyWithoutDailyGoalInput
  }

  export type DailyGoalUncheckedCreateWithoutClassroomInput = {
    id?: string
    userId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: DailyGoalTaskUncheckedCreateNestedManyWithoutDailyGoalInput
  }

  export type DailyGoalCreateOrConnectWithoutClassroomInput = {
    where: DailyGoalWhereUniqueInput
    create: XOR<DailyGoalCreateWithoutClassroomInput, DailyGoalUncheckedCreateWithoutClassroomInput>
  }

  export type DailyGoalCreateManyClassroomInputEnvelope = {
    data: DailyGoalCreateManyClassroomInput | DailyGoalCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type DailyReflectionCreateWithoutClassroomInput = {
    id?: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyReflectionsInput
  }

  export type DailyReflectionUncheckedCreateWithoutClassroomInput = {
    id?: string
    userId: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReflectionCreateOrConnectWithoutClassroomInput = {
    where: DailyReflectionWhereUniqueInput
    create: XOR<DailyReflectionCreateWithoutClassroomInput, DailyReflectionUncheckedCreateWithoutClassroomInput>
  }

  export type DailyReflectionCreateManyClassroomInputEnvelope = {
    data: DailyReflectionCreateManyClassroomInput | DailyReflectionCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomNotificationCreateWithoutClassroomInput = {
    id?: string
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutNotificationsCreatedInput
    reads?: ClassroomNotificationReadCreateNestedManyWithoutNotificationInput
  }

  export type ClassroomNotificationUncheckedCreateWithoutClassroomInput = {
    id?: string
    createdById?: string | null
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    reads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type ClassroomNotificationCreateOrConnectWithoutClassroomInput = {
    where: ClassroomNotificationWhereUniqueInput
    create: XOR<ClassroomNotificationCreateWithoutClassroomInput, ClassroomNotificationUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomNotificationCreateManyClassroomInputEnvelope = {
    data: ClassroomNotificationCreateManyClassroomInput | ClassroomNotificationCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHostedClassroomsInput = {
    update: XOR<UserUpdateWithoutHostedClassroomsInput, UserUncheckedUpdateWithoutHostedClassroomsInput>
    create: XOR<UserCreateWithoutHostedClassroomsInput, UserUncheckedCreateWithoutHostedClassroomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostedClassroomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostedClassroomsInput, UserUncheckedUpdateWithoutHostedClassroomsInput>
  }

  export type UserUpdateWithoutHostedClassroomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHostedClassroomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomMemberUpsertWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomMemberWhereUniqueInput
    update: XOR<ClassroomMemberUpdateWithoutClassroomInput, ClassroomMemberUncheckedUpdateWithoutClassroomInput>
    create: XOR<ClassroomMemberCreateWithoutClassroomInput, ClassroomMemberUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomMemberUpdateWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomMemberWhereUniqueInput
    data: XOR<ClassroomMemberUpdateWithoutClassroomInput, ClassroomMemberUncheckedUpdateWithoutClassroomInput>
  }

  export type ClassroomMemberUpdateManyWithWhereWithoutClassroomInput = {
    where: ClassroomMemberScalarWhereInput
    data: XOR<ClassroomMemberUpdateManyMutationInput, ClassroomMemberUncheckedUpdateManyWithoutClassroomInput>
  }

  export type ClassroomJoinRequestUpsertWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomJoinRequestWhereUniqueInput
    update: XOR<ClassroomJoinRequestUpdateWithoutClassroomInput, ClassroomJoinRequestUncheckedUpdateWithoutClassroomInput>
    create: XOR<ClassroomJoinRequestCreateWithoutClassroomInput, ClassroomJoinRequestUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomJoinRequestUpdateWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomJoinRequestWhereUniqueInput
    data: XOR<ClassroomJoinRequestUpdateWithoutClassroomInput, ClassroomJoinRequestUncheckedUpdateWithoutClassroomInput>
  }

  export type ClassroomJoinRequestUpdateManyWithWhereWithoutClassroomInput = {
    where: ClassroomJoinRequestScalarWhereInput
    data: XOR<ClassroomJoinRequestUpdateManyMutationInput, ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomInput>
  }

  export type DailyGoalUpsertWithWhereUniqueWithoutClassroomInput = {
    where: DailyGoalWhereUniqueInput
    update: XOR<DailyGoalUpdateWithoutClassroomInput, DailyGoalUncheckedUpdateWithoutClassroomInput>
    create: XOR<DailyGoalCreateWithoutClassroomInput, DailyGoalUncheckedCreateWithoutClassroomInput>
  }

  export type DailyGoalUpdateWithWhereUniqueWithoutClassroomInput = {
    where: DailyGoalWhereUniqueInput
    data: XOR<DailyGoalUpdateWithoutClassroomInput, DailyGoalUncheckedUpdateWithoutClassroomInput>
  }

  export type DailyGoalUpdateManyWithWhereWithoutClassroomInput = {
    where: DailyGoalScalarWhereInput
    data: XOR<DailyGoalUpdateManyMutationInput, DailyGoalUncheckedUpdateManyWithoutClassroomInput>
  }

  export type DailyReflectionUpsertWithWhereUniqueWithoutClassroomInput = {
    where: DailyReflectionWhereUniqueInput
    update: XOR<DailyReflectionUpdateWithoutClassroomInput, DailyReflectionUncheckedUpdateWithoutClassroomInput>
    create: XOR<DailyReflectionCreateWithoutClassroomInput, DailyReflectionUncheckedCreateWithoutClassroomInput>
  }

  export type DailyReflectionUpdateWithWhereUniqueWithoutClassroomInput = {
    where: DailyReflectionWhereUniqueInput
    data: XOR<DailyReflectionUpdateWithoutClassroomInput, DailyReflectionUncheckedUpdateWithoutClassroomInput>
  }

  export type DailyReflectionUpdateManyWithWhereWithoutClassroomInput = {
    where: DailyReflectionScalarWhereInput
    data: XOR<DailyReflectionUpdateManyMutationInput, DailyReflectionUncheckedUpdateManyWithoutClassroomInput>
  }

  export type ClassroomNotificationUpsertWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomNotificationWhereUniqueInput
    update: XOR<ClassroomNotificationUpdateWithoutClassroomInput, ClassroomNotificationUncheckedUpdateWithoutClassroomInput>
    create: XOR<ClassroomNotificationCreateWithoutClassroomInput, ClassroomNotificationUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomNotificationUpdateWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomNotificationWhereUniqueInput
    data: XOR<ClassroomNotificationUpdateWithoutClassroomInput, ClassroomNotificationUncheckedUpdateWithoutClassroomInput>
  }

  export type ClassroomNotificationUpdateManyWithWhereWithoutClassroomInput = {
    where: ClassroomNotificationScalarWhereInput
    data: XOR<ClassroomNotificationUpdateManyMutationInput, ClassroomNotificationUncheckedUpdateManyWithoutClassroomInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type ClassroomCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    host: UserCreateNestedOneWithoutHostedClassroomsInput
    joinRequests?: ClassroomJoinRequestCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    joinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutMembersInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutMembersInput, ClassroomUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomUpsertWithoutMembersInput = {
    update: XOR<ClassroomUpdateWithoutMembersInput, ClassroomUncheckedUpdateWithoutMembersInput>
    create: XOR<ClassroomCreateWithoutMembersInput, ClassroomUncheckedCreateWithoutMembersInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutMembersInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutMembersInput, ClassroomUncheckedUpdateWithoutMembersInput>
  }

  export type ClassroomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutHostedClassroomsNestedInput
    joinRequests?: ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    joinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type UserCreateWithoutClassroomJoinRequestsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClassroomJoinRequestsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClassroomJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassroomJoinRequestsInput, UserUncheckedCreateWithoutClassroomJoinRequestsInput>
  }

  export type ClassroomCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    host: UserCreateNestedOneWithoutHostedClassroomsInput
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutJoinRequestsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutJoinRequestsInput, ClassroomUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserUpsertWithoutClassroomJoinRequestsInput = {
    update: XOR<UserUpdateWithoutClassroomJoinRequestsInput, UserUncheckedUpdateWithoutClassroomJoinRequestsInput>
    create: XOR<UserCreateWithoutClassroomJoinRequestsInput, UserUncheckedCreateWithoutClassroomJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassroomJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassroomJoinRequestsInput, UserUncheckedUpdateWithoutClassroomJoinRequestsInput>
  }

  export type UserUpdateWithoutClassroomJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClassroomJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomUpsertWithoutJoinRequestsInput = {
    update: XOR<ClassroomUpdateWithoutJoinRequestsInput, ClassroomUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<ClassroomCreateWithoutJoinRequestsInput, ClassroomUncheckedCreateWithoutJoinRequestsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutJoinRequestsInput, ClassroomUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type ClassroomUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutHostedClassroomsNestedInput
    members?: ClassroomMemberUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type UserCreateWithoutDailyGoalsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyGoalsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyGoalsInput, UserUncheckedCreateWithoutDailyGoalsInput>
  }

  export type ClassroomCreateWithoutDailyGoalsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    host: UserCreateNestedOneWithoutHostedClassroomsInput
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutDailyGoalsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutDailyGoalsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutDailyGoalsInput, ClassroomUncheckedCreateWithoutDailyGoalsInput>
  }

  export type DailyGoalTaskCreateWithoutDailyGoalInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
  }

  export type DailyGoalTaskUncheckedCreateWithoutDailyGoalInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
  }

  export type DailyGoalTaskCreateOrConnectWithoutDailyGoalInput = {
    where: DailyGoalTaskWhereUniqueInput
    create: XOR<DailyGoalTaskCreateWithoutDailyGoalInput, DailyGoalTaskUncheckedCreateWithoutDailyGoalInput>
  }

  export type DailyGoalTaskCreateManyDailyGoalInputEnvelope = {
    data: DailyGoalTaskCreateManyDailyGoalInput | DailyGoalTaskCreateManyDailyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDailyGoalsInput = {
    update: XOR<UserUpdateWithoutDailyGoalsInput, UserUncheckedUpdateWithoutDailyGoalsInput>
    create: XOR<UserCreateWithoutDailyGoalsInput, UserUncheckedCreateWithoutDailyGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyGoalsInput, UserUncheckedUpdateWithoutDailyGoalsInput>
  }

  export type UserUpdateWithoutDailyGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomUpsertWithoutDailyGoalsInput = {
    update: XOR<ClassroomUpdateWithoutDailyGoalsInput, ClassroomUncheckedUpdateWithoutDailyGoalsInput>
    create: XOR<ClassroomCreateWithoutDailyGoalsInput, ClassroomUncheckedCreateWithoutDailyGoalsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutDailyGoalsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutDailyGoalsInput, ClassroomUncheckedUpdateWithoutDailyGoalsInput>
  }

  export type ClassroomUpdateWithoutDailyGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutHostedClassroomsNestedInput
    members?: ClassroomMemberUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutDailyGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type DailyGoalTaskUpsertWithWhereUniqueWithoutDailyGoalInput = {
    where: DailyGoalTaskWhereUniqueInput
    update: XOR<DailyGoalTaskUpdateWithoutDailyGoalInput, DailyGoalTaskUncheckedUpdateWithoutDailyGoalInput>
    create: XOR<DailyGoalTaskCreateWithoutDailyGoalInput, DailyGoalTaskUncheckedCreateWithoutDailyGoalInput>
  }

  export type DailyGoalTaskUpdateWithWhereUniqueWithoutDailyGoalInput = {
    where: DailyGoalTaskWhereUniqueInput
    data: XOR<DailyGoalTaskUpdateWithoutDailyGoalInput, DailyGoalTaskUncheckedUpdateWithoutDailyGoalInput>
  }

  export type DailyGoalTaskUpdateManyWithWhereWithoutDailyGoalInput = {
    where: DailyGoalTaskScalarWhereInput
    data: XOR<DailyGoalTaskUpdateManyMutationInput, DailyGoalTaskUncheckedUpdateManyWithoutDailyGoalInput>
  }

  export type DailyGoalTaskScalarWhereInput = {
    AND?: DailyGoalTaskScalarWhereInput | DailyGoalTaskScalarWhereInput[]
    OR?: DailyGoalTaskScalarWhereInput[]
    NOT?: DailyGoalTaskScalarWhereInput | DailyGoalTaskScalarWhereInput[]
    id?: StringFilter<"DailyGoalTask"> | string
    dailyGoalId?: StringFilter<"DailyGoalTask"> | string
    title?: StringFilter<"DailyGoalTask"> | string
    completed?: BoolFilter<"DailyGoalTask"> | boolean
    createdAt?: DateTimeFilter<"DailyGoalTask"> | Date | string
  }

  export type DailyGoalCreateWithoutTasksInput = {
    id?: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyGoalsInput
    classroom: ClassroomCreateNestedOneWithoutDailyGoalsInput
  }

  export type DailyGoalUncheckedCreateWithoutTasksInput = {
    id?: string
    userId: string
    classroomId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyGoalCreateOrConnectWithoutTasksInput = {
    where: DailyGoalWhereUniqueInput
    create: XOR<DailyGoalCreateWithoutTasksInput, DailyGoalUncheckedCreateWithoutTasksInput>
  }

  export type DailyGoalUpsertWithoutTasksInput = {
    update: XOR<DailyGoalUpdateWithoutTasksInput, DailyGoalUncheckedUpdateWithoutTasksInput>
    create: XOR<DailyGoalCreateWithoutTasksInput, DailyGoalUncheckedCreateWithoutTasksInput>
    where?: DailyGoalWhereInput
  }

  export type DailyGoalUpdateToOneWithWhereWithoutTasksInput = {
    where?: DailyGoalWhereInput
    data: XOR<DailyGoalUpdateWithoutTasksInput, DailyGoalUncheckedUpdateWithoutTasksInput>
  }

  export type DailyGoalUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyGoalsNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutDailyGoalsNestedInput
  }

  export type DailyGoalUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDailyReflectionsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyReflectionsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyReflectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyReflectionsInput, UserUncheckedCreateWithoutDailyReflectionsInput>
  }

  export type ClassroomCreateWithoutDailyReflectionsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    host: UserCreateNestedOneWithoutHostedClassroomsInput
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutDailyReflectionsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutClassroomInput
    notifications?: ClassroomNotificationUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutDailyReflectionsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutDailyReflectionsInput, ClassroomUncheckedCreateWithoutDailyReflectionsInput>
  }

  export type UserUpsertWithoutDailyReflectionsInput = {
    update: XOR<UserUpdateWithoutDailyReflectionsInput, UserUncheckedUpdateWithoutDailyReflectionsInput>
    create: XOR<UserCreateWithoutDailyReflectionsInput, UserUncheckedCreateWithoutDailyReflectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyReflectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyReflectionsInput, UserUncheckedUpdateWithoutDailyReflectionsInput>
  }

  export type UserUpdateWithoutDailyReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomUpsertWithoutDailyReflectionsInput = {
    update: XOR<ClassroomUpdateWithoutDailyReflectionsInput, ClassroomUncheckedUpdateWithoutDailyReflectionsInput>
    create: XOR<ClassroomCreateWithoutDailyReflectionsInput, ClassroomUncheckedCreateWithoutDailyReflectionsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutDailyReflectionsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutDailyReflectionsInput, ClassroomUncheckedUpdateWithoutDailyReflectionsInput>
  }

  export type ClassroomUpdateWithoutDailyReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutHostedClassroomsNestedInput
    members?: ClassroomMemberUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutDailyReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateWithoutNotificationsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    host: UserCreateNestedOneWithoutHostedClassroomsInput
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput
    joinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutClassroomInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutClassroomInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutNotificationsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutNotificationsInput, ClassroomUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationsCreatedInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationReads?: ClassroomNotificationReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsCreatedInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationReads?: ClassroomNotificationReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsCreatedInput, UserUncheckedCreateWithoutNotificationsCreatedInput>
  }

  export type ClassroomNotificationReadCreateWithoutNotificationInput = {
    readAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationReadsInput
  }

  export type ClassroomNotificationReadUncheckedCreateWithoutNotificationInput = {
    userId: string
    readAt?: Date | string
  }

  export type ClassroomNotificationReadCreateOrConnectWithoutNotificationInput = {
    where: ClassroomNotificationReadWhereUniqueInput
    create: XOR<ClassroomNotificationReadCreateWithoutNotificationInput, ClassroomNotificationReadUncheckedCreateWithoutNotificationInput>
  }

  export type ClassroomNotificationReadCreateManyNotificationInputEnvelope = {
    data: ClassroomNotificationReadCreateManyNotificationInput | ClassroomNotificationReadCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithoutNotificationsInput = {
    update: XOR<ClassroomUpdateWithoutNotificationsInput, ClassroomUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ClassroomCreateWithoutNotificationsInput, ClassroomUncheckedCreateWithoutNotificationsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutNotificationsInput, ClassroomUncheckedUpdateWithoutNotificationsInput>
  }

  export type ClassroomUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutHostedClassroomsNestedInput
    members?: ClassroomMemberUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type UserUpsertWithoutNotificationsCreatedInput = {
    update: XOR<UserUpdateWithoutNotificationsCreatedInput, UserUncheckedUpdateWithoutNotificationsCreatedInput>
    create: XOR<UserCreateWithoutNotificationsCreatedInput, UserUncheckedCreateWithoutNotificationsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsCreatedInput, UserUncheckedUpdateWithoutNotificationsCreatedInput>
  }

  export type UserUpdateWithoutNotificationsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationReads?: ClassroomNotificationReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationReads?: ClassroomNotificationReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomNotificationReadUpsertWithWhereUniqueWithoutNotificationInput = {
    where: ClassroomNotificationReadWhereUniqueInput
    update: XOR<ClassroomNotificationReadUpdateWithoutNotificationInput, ClassroomNotificationReadUncheckedUpdateWithoutNotificationInput>
    create: XOR<ClassroomNotificationReadCreateWithoutNotificationInput, ClassroomNotificationReadUncheckedCreateWithoutNotificationInput>
  }

  export type ClassroomNotificationReadUpdateWithWhereUniqueWithoutNotificationInput = {
    where: ClassroomNotificationReadWhereUniqueInput
    data: XOR<ClassroomNotificationReadUpdateWithoutNotificationInput, ClassroomNotificationReadUncheckedUpdateWithoutNotificationInput>
  }

  export type ClassroomNotificationReadUpdateManyWithWhereWithoutNotificationInput = {
    where: ClassroomNotificationReadScalarWhereInput
    data: XOR<ClassroomNotificationReadUpdateManyMutationInput, ClassroomNotificationReadUncheckedUpdateManyWithoutNotificationInput>
  }

  export type ClassroomNotificationCreateWithoutReadsInput = {
    id?: string
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutNotificationsInput
    createdBy?: UserCreateNestedOneWithoutNotificationsCreatedInput
  }

  export type ClassroomNotificationUncheckedCreateWithoutReadsInput = {
    id?: string
    classroomId: string
    createdById?: string | null
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type ClassroomNotificationCreateOrConnectWithoutReadsInput = {
    where: ClassroomNotificationWhereUniqueInput
    create: XOR<ClassroomNotificationCreateWithoutReadsInput, ClassroomNotificationUncheckedCreateWithoutReadsInput>
  }

  export type UserCreateWithoutNotificationReadsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutNotificationReadsInput = {
    id?: string
    googleId?: string | null
    passwordHash?: string | null
    name: string
    email: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedClassrooms?: ClassroomUncheckedCreateNestedManyWithoutHostInput
    memberships?: ClassroomMemberUncheckedCreateNestedManyWithoutUserInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedCreateNestedManyWithoutUserInput
    dailyGoals?: DailyGoalUncheckedCreateNestedManyWithoutUserInput
    dailyReflections?: DailyReflectionUncheckedCreateNestedManyWithoutUserInput
    notificationsCreated?: ClassroomNotificationUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutNotificationReadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
  }

  export type ClassroomNotificationUpsertWithoutReadsInput = {
    update: XOR<ClassroomNotificationUpdateWithoutReadsInput, ClassroomNotificationUncheckedUpdateWithoutReadsInput>
    create: XOR<ClassroomNotificationCreateWithoutReadsInput, ClassroomNotificationUncheckedCreateWithoutReadsInput>
    where?: ClassroomNotificationWhereInput
  }

  export type ClassroomNotificationUpdateToOneWithWhereWithoutReadsInput = {
    where?: ClassroomNotificationWhereInput
    data: XOR<ClassroomNotificationUpdateWithoutReadsInput, ClassroomNotificationUncheckedUpdateWithoutReadsInput>
  }

  export type ClassroomNotificationUpdateWithoutReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutNotificationsNestedInput
    createdBy?: UserUpdateOneWithoutNotificationsCreatedNestedInput
  }

  export type ClassroomNotificationUncheckedUpdateWithoutReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNotificationReadsInput = {
    update: XOR<UserUpdateWithoutNotificationReadsInput, UserUncheckedUpdateWithoutNotificationReadsInput>
    create: XOR<UserCreateWithoutNotificationReadsInput, UserUncheckedCreateWithoutNotificationReadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationReadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationReadsInput, UserUncheckedUpdateWithoutNotificationReadsInput>
  }

  export type UserUpdateWithoutNotificationReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedClassrooms?: ClassroomUncheckedUpdateManyWithoutHostNestedInput
    memberships?: ClassroomMemberUncheckedUpdateManyWithoutUserNestedInput
    classroomJoinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutUserNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutUserNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutUserNestedInput
    notificationsCreated?: ClassroomNotificationUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ClassroomCreateManyHostInput = {
    id?: string
    name: string
    description?: string | null
    joinCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyGoal?: string | null
    goalSettingTime?: string | null
    reflectionTime?: string | null
    tasksPerDay?: number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    allowLateGoalEdits?: boolean
  }

  export type ClassroomMemberCreateManyUserInput = {
    id?: string
    classroomId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type ClassroomJoinRequestCreateManyUserInput = {
    id?: string
    classroomId: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyGoalCreateManyUserInput = {
    id?: string
    classroomId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReflectionCreateManyUserInput = {
    id?: string
    classroomId: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomNotificationCreateManyCreatedByInput = {
    id?: string
    classroomId: string
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type ClassroomNotificationReadCreateManyUserInput = {
    notificationId: string
    readAt?: Date | string
  }

  export type ClassroomUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
    members?: ClassroomMemberUncheckedUpdateManyWithoutClassroomNestedInput
    joinRequests?: ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomNestedInput
    dailyGoals?: DailyGoalUncheckedUpdateManyWithoutClassroomNestedInput
    dailyReflections?: DailyReflectionUncheckedUpdateManyWithoutClassroomNestedInput
    notifications?: ClassroomNotificationUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyGoal?: NullableStringFieldUpdateOperationsInput | string | null
    goalSettingTime?: NullableStringFieldUpdateOperationsInput | string | null
    reflectionTime?: NullableStringFieldUpdateOperationsInput | string | null
    tasksPerDay?: IntFieldUpdateOperationsInput | number
    dayParts?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    allowLateGoalEdits?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClassroomMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ClassroomMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type ClassroomJoinRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutDailyGoalsNestedInput
    tasks?: DailyGoalTaskUpdateManyWithoutDailyGoalNestedInput
  }

  export type DailyGoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: DailyGoalTaskUncheckedUpdateManyWithoutDailyGoalNestedInput
  }

  export type DailyGoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutDailyReflectionsNestedInput
  }

  export type DailyReflectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutNotificationsNestedInput
    reads?: ClassroomNotificationReadUpdateManyWithoutNotificationNestedInput
  }

  export type ClassroomNotificationUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: ClassroomNotificationReadUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type ClassroomNotificationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroomId?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadUpdateWithoutUserInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: ClassroomNotificationUpdateOneRequiredWithoutReadsNestedInput
  }

  export type ClassroomNotificationReadUncheckedUpdateWithoutUserInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadUncheckedUpdateManyWithoutUserInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomMemberCreateManyClassroomInput = {
    id?: string
    userId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type ClassroomJoinRequestCreateManyClassroomInput = {
    id?: string
    userId: string
    status?: $Enums.JoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyGoalCreateManyClassroomInput = {
    id?: string
    userId: string
    date?: Date | string
    statement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReflectionCreateManyClassroomInput = {
    id?: string
    userId: string
    date?: Date | string
    content: string
    assessmentScore?: number | null
    assessmentCorrect?: number | null
    assessmentTotal?: number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomNotificationCreateManyClassroomInput = {
    id?: string
    createdById?: string | null
    recipientEmail?: string | null
    type?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type ClassroomMemberUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type ClassroomMemberUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomMemberUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassroomJoinRequestsNestedInput
  }

  export type ClassroomJoinRequestUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomJoinRequestUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyGoalsNestedInput
    tasks?: DailyGoalTaskUpdateManyWithoutDailyGoalNestedInput
  }

  export type DailyGoalUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: DailyGoalTaskUncheckedUpdateManyWithoutDailyGoalNestedInput
  }

  export type DailyGoalUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyReflectionsNestedInput
  }

  export type DailyReflectionUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReflectionUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    assessmentScore?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentCorrect?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    assessmentDetails?: NullableJsonNullValueInput | InputJsonValue
    assessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutNotificationsCreatedNestedInput
    reads?: ClassroomNotificationReadUpdateManyWithoutNotificationNestedInput
  }

  export type ClassroomNotificationUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: ClassroomNotificationReadUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type ClassroomNotificationUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalTaskCreateManyDailyGoalInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
  }

  export type DailyGoalTaskUpdateWithoutDailyGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalTaskUncheckedUpdateWithoutDailyGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyGoalTaskUncheckedUpdateManyWithoutDailyGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadCreateManyNotificationInput = {
    userId: string
    readAt?: Date | string
  }

  export type ClassroomNotificationReadUpdateWithoutNotificationInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationReadsNestedInput
  }

  export type ClassroomNotificationReadUncheckedUpdateWithoutNotificationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomNotificationReadUncheckedUpdateManyWithoutNotificationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}