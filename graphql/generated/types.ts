import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Decimal: any;
  ExpectedErrorType: any;
  GenericScalar: any;
  JSONString: any;
  SocialCamelJSON: any;
  UUID: any;
  Upload: any;
};

export type AccessoryBrandInput = {
  description?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type AccessoryBrandType = Node & {
  __typename?: 'AccessoryBrandType';
  accessorymodelSet: AccessoryTypeConnection;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  logo: Scalars['String'];
  name: Scalars['String'];
};


export type AccessoryBrandTypeAccessorymodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  referenceLinks_AccessoryIdInSite?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: InputMaybe<Scalars['String']>;
};

export type AccessoryBrandTypeConnection = {
  __typename?: 'AccessoryBrandTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryBrandTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessoryBrandType` and its cursor. */
export type AccessoryBrandTypeEdge = {
  __typename?: 'AccessoryBrandTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessoryBrandType>;
};

export type AccessoryCategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  title: Scalars['String'];
};

export type AccessoryCategoryType = Node & {
  __typename?: 'AccessoryCategoryType';
  accessoriesInCategory: AccessoryTypeConnection;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type AccessoryCategoryTypeAccessoriesInCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  referenceLinks_AccessoryIdInSite?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: InputMaybe<Scalars['String']>;
};

export type AccessoryCategoryTypeConnection = {
  __typename?: 'AccessoryCategoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryCategoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessoryCategoryType` and its cursor. */
export type AccessoryCategoryTypeEdge = {
  __typename?: 'AccessoryCategoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessoryCategoryType>;
};

export type AccessoryCollectionsType = Node & {
  __typename?: 'AccessoryCollectionsType';
  accessory: AccessoryType;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
};

export type AccessoryCollectionsTypeConnection = {
  __typename?: 'AccessoryCollectionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryCollectionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessoryCollectionsType` and its cursor. */
export type AccessoryCollectionsTypeEdge = {
  __typename?: 'AccessoryCollectionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessoryCollectionsType>;
};

export type AccessoryInput = {
  brand?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type AccessoryLikeType = Node & {
  __typename?: 'AccessoryLikeType';
  accessory: AccessoryType;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
};

export type AccessoryLikeTypeConnection = {
  __typename?: 'AccessoryLikeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryLikeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessoryLikeType` and its cursor. */
export type AccessoryLikeTypeEdge = {
  __typename?: 'AccessoryLikeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessoryLikeType>;
};

export type AccessoryReferenceyType = Node & {
  __typename?: 'AccessoryReferenceyType';
  accessoriesInRefrence: AccessoryTypeConnection;
  accessoryIdInSite?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  site: AccessorySiteType;
};


export type AccessoryReferenceyTypeAccessoriesInRefrenceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  referenceLinks_AccessoryIdInSite?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: InputMaybe<Scalars['String']>;
};

export type AccessoryReferenceyTypeConnection = {
  __typename?: 'AccessoryReferenceyTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryReferenceyTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessoryReferenceyType` and its cursor. */
export type AccessoryReferenceyTypeEdge = {
  __typename?: 'AccessoryReferenceyTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessoryReferenceyType>;
};

export type AccessoryRelatedInput = {
  category?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  referenceLinks?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccessorySiteInput = {
  description?: InputMaybe<Scalars['String']>;
  isWorldwide?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  serviceZone?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccessorySiteType = Node & {
  __typename?: 'AccessorySiteType';
  accessoriesSite: AccessoryReferenceyTypeConnection;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isWorldwide: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  serviceZone: CountryTypeConnection;
};


export type AccessorySiteTypeAccessoriesSiteArgs = {
  accessoryIdInSite?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Float']>;
  site?: InputMaybe<Scalars['ID']>;
};


export type AccessorySiteTypeServiceZoneArgs = {
  after?: InputMaybe<Scalars['String']>;
  alpha2?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AccessorySiteTypeConnection = {
  __typename?: 'AccessorySiteTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessorySiteTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessorySiteType` and its cursor. */
export type AccessorySiteTypeEdge = {
  __typename?: 'AccessorySiteTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessorySiteType>;
};

export type AccessoryType = Node & {
  __typename?: 'AccessoryType';
  articleWithAccessory: ArticleTypeConnection;
  brand?: Maybe<AccessoryBrandType>;
  category: AccessoryCategoryType;
  /** The ID of the object. */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  likesCount: Scalars['Int'];
  likesOfAccessory: AccessoryLikeTypeConnection;
  name: Scalars['String'];
  referenceLinks: AccessoryReferenceyTypeConnection;
  tripmodelSet: TripTypeConnection;
  usersSavedAccessory: AccessoryCollectionsTypeConnection;
};


export type AccessoryTypeArticleWithAccessoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type AccessoryTypeLikesOfAccessoryArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type AccessoryTypeReferenceLinksArgs = {
  accessoryIdInSite?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Float']>;
  site?: InputMaybe<Scalars['ID']>;
};


export type AccessoryTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type AccessoryTypeUsersSavedAccessoryArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type AccessoryTypeConnection = {
  __typename?: 'AccessoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AccessoryType` and its cursor. */
export type AccessoryTypeEdge = {
  __typename?: 'AccessoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AccessoryType>;
};

export type AchivmentType = Node & {
  __typename?: 'AchivmentType';
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  profilemodelSet: ProfileTypeConnection;
  title: Scalars['String'];
};


export type AchivmentTypeProfilemodelSetArgs = {
  about?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AchivmentTypeConnection = {
  __typename?: 'AchivmentTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AchivmentTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AchivmentType` and its cursor. */
export type AchivmentTypeEdge = {
  __typename?: 'AchivmentTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AchivmentType>;
};

export type AddPlaceImages = {
  __typename?: 'AddPlaceImages';
  images?: Maybe<Array<Maybe<PlaceImageType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type AddRelatedFieldToTripMutation = {
  __typename?: 'AddRelatedFieldToTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ArticleCategoryType = Node & {
  __typename?: 'ArticleCategoryType';
  articlesOfCategory: ArticleTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  svg: Scalars['String'];
  title: Scalars['String'];
};


export type ArticleCategoryTypeArticlesOfCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ArticleCategoryTypeConnection = {
  __typename?: 'ArticleCategoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleCategoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ArticleCategoryType` and its cursor. */
export type ArticleCategoryTypeEdge = {
  __typename?: 'ArticleCategoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ArticleCategoryType>;
};

export type ArticleReviewLikeType = Node & {
  __typename?: 'ArticleReviewLikeType';
  article: ArticleType;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
};

export type ArticleReviewLikeTypeConnection = {
  __typename?: 'ArticleReviewLikeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleReviewLikeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ArticleReviewLikeType` and its cursor. */
export type ArticleReviewLikeTypeEdge = {
  __typename?: 'ArticleReviewLikeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ArticleReviewLikeType>;
};

export type ArticleReviewType = Node & {
  __typename?: 'ArticleReviewType';
  article: ArticleType;
  author: UserType;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ArticleReviewTypeConnection = {
  __typename?: 'ArticleReviewTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleReviewTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ArticleReviewType` and its cursor. */
export type ArticleReviewTypeEdge = {
  __typename?: 'ArticleReviewTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ArticleReviewType>;
};

export type ArticleType = Node & {
  __typename?: 'ArticleType';
  accessories: AccessoryTypeConnection;
  activities: TripActivitieTypeConnection;
  author: UserType;
  category?: Maybe<ArticleCategoryType>;
  content: Scalars['String'];
  countries: CountryTypeConnection;
  createdAt: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  likes: Scalars['Int'];
  likesOfArticle: ArticleReviewLikeTypeConnection;
  places: PlaceTypeConnection;
  reviewsOfArticle: ArticleReviewTypeConnection;
  shortDescription?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type ArticleTypeAccessoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  referenceLinks_AccessoryIdInSite?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: InputMaybe<Scalars['String']>;
};


export type ArticleTypeActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type ArticleTypeCountriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  alpha2?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ArticleTypeLikesOfArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type ArticleTypePlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticleTypeReviewsOfArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ArticleTypeConnection = {
  __typename?: 'ArticleTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ArticleType` and its cursor. */
export type ArticleTypeEdge = {
  __typename?: 'ArticleTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ArticleType>;
};

export type BatchRegisterInput = {
  batchType: Scalars['String'];
  emergencyPhone: Scalars['String'];
  tourExecution: Scalars['ID'];
  userRegisters?: InputMaybe<Array<InputMaybe<UserRegisterTourInput>>>;
};

/** An enumeration. */
export enum BatchRegisterTourBatchType {
  /** family */
  FA = 'FA',
  /** friendly */
  FR = 'FR'
}

export type BatchRegisterTourType = Node & {
  __typename?: 'BatchRegisterTourType';
  batchType: BatchRegisterTourBatchType;
  countOfCompanions: Scalars['Int'];
  emergencyPhone: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  paid: Scalars['Boolean'];
  registertourmodelSet: UserRegisteredTourTypeConnection;
  tourExecution: TourExecutionType;
  user: UserType;
};


export type BatchRegisterTourTypeRegistertourmodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type BatchRegisterTourTypeConnection = {
  __typename?: 'BatchRegisterTourTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BatchRegisterTourTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BatchRegisterTourType` and its cursor. */
export type BatchRegisterTourTypeEdge = {
  __typename?: 'BatchRegisterTourTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<BatchRegisterTourType>;
};

export type ChangePasswordMutation = {
  __typename?: 'ChangePasswordMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type ChangeUsernameMutation = {
  __typename?: 'ChangeUsernameMutation';
  success?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type CityType = Node & {
  __typename?: 'CityType';
  country: CountryType;
  /** The ID of the object. */
  id: Scalars['ID'];
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  name: Scalars['String'];
  placesOfCity: PlaceTypeConnection;
  province: ProvinceType;
  toursOfCity: TourTypeConnection;
  transferDest: TransferTypeConnection;
  transferSrc: TransferTypeConnection;
  tripsOfCity: TripTypeConnection;
};


export type CityTypePlacesOfCityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CityTypeToursOfCityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type CityTypeTransferDestArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  transferType?: InputMaybe<Scalars['ID']>;
};


export type CityTypeTransferSrcArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  transferType?: InputMaybe<Scalars['ID']>;
};


export type CityTypeTripsOfCityArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type CityTypeConnection = {
  __typename?: 'CityTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CityTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CityType` and its cursor. */
export type CityTypeEdge = {
  __typename?: 'CityTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CityType>;
};

export type CountryType = Node & {
  __typename?: 'CountryType';
  accessoriesServiceZone: AccessorySiteTypeConnection;
  alpha2: Scalars['String'];
  articlesOfCountry: ArticleTypeConnection;
  citiesOfCountry: CityTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  placesOfCountry: PlaceTypeConnection;
  provincesOfCountry: ProvinceTypeConnection;
  tourmodelSet: TourTypeConnection;
  tripsOfCountry: TripTypeConnection;
};


export type CountryTypeAccessoriesServiceZoneArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CountryTypeArticlesOfCountryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CountryTypeCitiesOfCountryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CountryTypePlacesOfCountryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CountryTypeProvincesOfCountryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CountryTypeTourmodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type CountryTypeTripsOfCountryArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type CountryTypeConnection = {
  __typename?: 'CountryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CountryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CountryType` and its cursor. */
export type CountryTypeEdge = {
  __typename?: 'CountryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CountryType>;
};

export type CreateAccessoryBrandMutation = {
  __typename?: 'CreateAccessoryBrandMutation';
  brand?: Maybe<AccessoryBrandType>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateAccessoryCategoryMutation = {
  __typename?: 'CreateAccessoryCategoryMutation';
  brand?: Maybe<AccessoryCategoryType>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** create accessory mutation */
export type CreateAccessoryMutation = {
  __typename?: 'CreateAccessoryMutation';
  accessory?: Maybe<AccessoryType>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateAccessorySiteMutation = {
  __typename?: 'CreateAccessorySiteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  site?: Maybe<AccessorySiteType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateExperienceImagesMutation = {
  __typename?: 'CreateExperienceImagesMutation';
  images?: Maybe<Array<Maybe<ExperienceImageType>>>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateExperienceMutation = {
  __typename?: 'CreateExperienceMutation';
  experience?: Maybe<ExperienceType>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreatePlace = {
  __typename?: 'CreatePlace';
  place?: Maybe<PlaceType>;
};

/** create Residence mutation. */
export type CreateResidence = {
  __typename?: 'CreateResidence';
  residence?: Maybe<ResidenceType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** create tour mutation */
export type CreateTour = {
  __typename?: 'CreateTour';
  place?: Maybe<PlaceType>;
};

/** create review for tour mutation */
export type CreateTourReview = {
  __typename?: 'CreateTourReview';
  tourReview?: Maybe<TourReviewType>;
};

export type CreateTransferMutation = {
  __typename?: 'CreateTransferMutation';
  success?: Maybe<Scalars['Boolean']>;
  transfer?: Maybe<TransferType>;
};

/** create trip mutation. */
export type CreateTrip = {
  __typename?: 'CreateTrip';
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

export type CreateTripImages = {
  __typename?: 'CreateTripImages';
  images?: Maybe<Array<Maybe<TripImageType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateTripLike = {
  __typename?: 'CreateTripLike';
  like?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

export type CreateTripReviewInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  tripId: Scalars['ID'];
};

export type CreateTripReviewPayload = {
  __typename?: 'CreateTripReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  review?: Maybe<TripReviewType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateTripStaticsMutation = {
  __typename?: 'CreateTripStaticsMutation';
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteExperienceMutation = {
  __typename?: 'DeleteExperienceMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type DeletePlace = {
  __typename?: 'DeletePlace';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** update residence review mutation. */
export type DeleteResidence = {
  __typename?: 'DeleteResidence';
  success?: Maybe<Scalars['Boolean']>;
};

/** delete tour mutation.  */
export type DeleteTour = {
  __typename?: 'DeleteTour';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** delete tour review mutation.  */
export type DeleteTourReview = {
  __typename?: 'DeleteTourReview';
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DeleteTransferMutation = {
  __typename?: 'DeleteTransferMutation';
  success?: Maybe<Scalars['Boolean']>;
};

/** delete trip mutation. */
export type DeleteTrip = {
  __typename?: 'DeleteTrip';
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DeleteTripImage = {
  __typename?: 'DeleteTripImage';
  success?: Maybe<Scalars['Boolean']>;
};

/** delete trip review mutation. */
export type DeleteTripReview = {
  __typename?: 'DeleteTripReview';
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DisLikeTripReviewMutation = {
  __typename?: 'DisLikeTripReviewMutation';
  success?: Maybe<Scalars['Boolean']>;
  tripReviewLike?: Maybe<TripReviewLikeType>;
};

export type DiscountCollectionsType = Node & {
  __typename?: 'DiscountCollectionsType';
  discount: DiscountType;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
};

export type DiscountCollectionsTypeConnection = {
  __typename?: 'DiscountCollectionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DiscountCollectionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DiscountCollectionsType` and its cursor. */
export type DiscountCollectionsTypeEdge = {
  __typename?: 'DiscountCollectionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<DiscountCollectionsType>;
};

export type DiscountType = Node & {
  __typename?: 'DiscountType';
  amount: Scalars['Decimal'];
  ceiling: Scalars['Decimal'];
  expiration?: Maybe<Scalars['Date']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isPercentageBase: Scalars['Boolean'];
  name: Scalars['String'];
  percentage?: Maybe<Scalars['Int']>;
  type: DiscountTypeType;
  usersSavedDiscount: DiscountCollectionsTypeConnection;
};


export type DiscountTypeUsersSavedDiscountArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type DiscountTypeConnection = {
  __typename?: 'DiscountTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DiscountTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DiscountType` and its cursor. */
export type DiscountTypeEdge = {
  __typename?: 'DiscountTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<DiscountType>;
};

export type DiscountTypeType = Node & {
  __typename?: 'DiscountTypeType';
  discountsOfType: DiscountTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  typeName: Scalars['String'];
};


export type DiscountTypeTypeDiscountsOfTypeArgs = {
  after?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  before?: InputMaybe<Scalars['String']>;
  ceiling?: InputMaybe<Scalars['Float']>;
  expiration?: InputMaybe<Scalars['Date']>;
  first?: InputMaybe<Scalars['Int']>;
  isPercentageBase?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  percentage?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['ID']>;
};

export type ExperienceCollectionsType = Node & {
  __typename?: 'ExperienceCollectionsType';
  experience: ExperienceType;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
};

export type ExperienceCollectionsTypeConnection = {
  __typename?: 'ExperienceCollectionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceCollectionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ExperienceCollectionsType` and its cursor. */
export type ExperienceCollectionsTypeEdge = {
  __typename?: 'ExperienceCollectionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ExperienceCollectionsType>;
};

export type ExperienceImageInputType = {
  description?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ExperienceImageType = Node & {
  __typename?: 'ExperienceImageType';
  copyrightName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  experiencemodelSet: ExperienceTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  user: UserType;
};


export type ExperienceImageTypeExperiencemodelSetArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ExperienceImageTypeConnection = {
  __typename?: 'ExperienceImageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceImageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ExperienceImageType` and its cursor. */
export type ExperienceImageTypeEdge = {
  __typename?: 'ExperienceImageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ExperienceImageType>;
};

export type ExperienceInput = {
  description: Scalars['String'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ExperienceInputUpdate = {
  description?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ExperienceRelatedInputs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ExperienceType = Node & {
  __typename?: 'ExperienceType';
  activities: TripActivitieTypeConnection;
  author: UserType;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  images: ExperienceImageTypeConnection;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  tripmodelSet: TripTypeConnection;
  usersSavedExperience: ExperienceCollectionsTypeConnection;
  videos: ExperienceVideoTypeConnection;
};


export type ExperienceTypeActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type ExperienceTypeImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ExperienceTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type ExperienceTypeUsersSavedExperienceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type ExperienceTypeVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ExperienceTypeConnection = {
  __typename?: 'ExperienceTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ExperienceType` and its cursor. */
export type ExperienceTypeEdge = {
  __typename?: 'ExperienceTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ExperienceType>;
};

export type ExperienceVideoType = Node & {
  __typename?: 'ExperienceVideoType';
  copyrightName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  experiencemodelSet: ExperienceTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  user: UserType;
  video: Scalars['String'];
};


export type ExperienceVideoTypeExperiencemodelSetArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ExperienceVideoTypeConnection = {
  __typename?: 'ExperienceVideoTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceVideoTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ExperienceVideoType` and its cursor. */
export type ExperienceVideoTypeEdge = {
  __typename?: 'ExperienceVideoTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ExperienceVideoType>;
};

export type FollowOrUnfollowInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  followedId: Scalars['ID'];
};

export type FollowOrUnfollowPayload = {
  __typename?: 'FollowOrUnfollowPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  followStatus?: Maybe<Scalars['Boolean']>;
};

export type FollowingType = Node & {
  __typename?: 'FollowingType';
  dateFollowed: Scalars['DateTime'];
  followed: UserType;
  follower: UserType;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type FollowingTypeConnection = {
  __typename?: 'FollowingTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FollowingTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FollowingType` and its cursor. */
export type FollowingTypeEdge = {
  __typename?: 'FollowingTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<FollowingType>;
};

/** send forgotten passworld sms verification */
export type ForgotPasswordSms = {
  __typename?: 'ForgotPasswordSMS';
  success?: Maybe<Scalars['Boolean']>;
};

export type LikeTripReviewMutation = {
  __typename?: 'LikeTripReviewMutation';
  success?: Maybe<Scalars['Boolean']>;
  tripReviewLike?: Maybe<TripReviewLikeType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlaceImages?: Maybe<AddPlaceImages>;
  addRelatedFieldToTrip?: Maybe<AddRelatedFieldToTripMutation>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  changeUsername?: Maybe<ChangeUsernameMutation>;
  /** create accessory mutation */
  createAccessory?: Maybe<CreateAccessoryMutation>;
  createAccessoryBrand?: Maybe<CreateAccessoryBrandMutation>;
  createAccessoryCategory?: Maybe<CreateAccessoryCategoryMutation>;
  createAccessorySite?: Maybe<CreateAccessorySiteMutation>;
  createExperience?: Maybe<CreateExperienceMutation>;
  createExperienceImages?: Maybe<CreateExperienceImagesMutation>;
  createPlace?: Maybe<CreatePlace>;
  /** create Residence mutation. */
  createResidence?: Maybe<CreateResidence>;
  /** create tour mutation */
  createTour?: Maybe<CreateTour>;
  /** create review for tour mutation */
  createTourReview?: Maybe<CreateTourReview>;
  createTransfer?: Maybe<CreateTransferMutation>;
  /** create trip mutation. */
  createTrip?: Maybe<CreateTrip>;
  createTripImages?: Maybe<CreateTripImages>;
  createTripLike?: Maybe<CreateTripLike>;
  createTripReview?: Maybe<CreateTripReviewPayload>;
  createTripWithStatics?: Maybe<CreateTripStaticsMutation>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  deleteExperience?: Maybe<DeleteExperienceMutation>;
  deletePlace?: Maybe<DeletePlace>;
  /** update residence review mutation. */
  deleteResidence?: Maybe<DeleteResidence>;
  /** delete tour mutation.  */
  deleteTour?: Maybe<DeleteTour>;
  /** delete tour review mutation.  */
  deleteTourReview?: Maybe<DeleteTourReview>;
  deleteTransfer?: Maybe<DeleteTransferMutation>;
  /** delete trip mutation. */
  deleteTrip?: Maybe<DeleteTrip>;
  deleteTripImage?: Maybe<DeleteTripImage>;
  /** delete trip review mutation. */
  deleteTripReview?: Maybe<DeleteTripReview>;
  dislikeTripReview?: Maybe<DisLikeTripReviewMutation>;
  followOrUnfollow?: Maybe<FollowOrUnfollowPayload>;
  /** send forgotten passworld sms verification */
  forgotPasswordSms?: Maybe<ForgotPasswordSms>;
  getTourPaymentLink?: Maybe<PayTourExecution>;
  likeTripReview?: Maybe<LikeTripReviewMutation>;
  passwordChange?: Maybe<ChangePasswordMutation>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSet>;
  publishTrip?: Maybe<PublishTripMutation>;
  refreshToken?: Maybe<Refresh>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /** Register user and send verification code */
  registerSms?: Maybe<RegisterSms>;
  /** user register to tour mutation.  */
  registerTour?: Maybe<RegisterTourMutation>;
  /** register tour leader.  */
  registerTourLeader?: Maybe<RegisterTourLeader>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Resend sms to user */
  resendVerificationSms?: Maybe<ResendVerificationSms>;
  /** reset password */
  resetPasswordSms?: Maybe<ResetPasswordSms>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  saveAccessory?: Maybe<SaveAccessoryMutation>;
  saveExperience?: Maybe<SaveExperienceMutation>;
  savePlace?: Maybe<SavePlaceMutation>;
  saveTour?: Maybe<SaveTourMutation>;
  saveTrip?: Maybe<SaveTripMutation>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /** Social Auth Mutation for Relay */
  socialAuth?: Maybe<SocialAuthPayload>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  undoPublishTrip?: Maybe<UnPublishTripMutation>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  updateExperience?: Maybe<UpdateExperienceMutation>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  /** update residence review mutation. */
  updateResidence?: Maybe<UpdateResidence>;
  /** update trip review mutation. */
  updateTrip?: Maybe<UpdateTrip>;
  /** update trip review mutation. */
  updateTripReview?: Maybe<UpdateTripReview>;
  updateUser?: Maybe<UpdateUserPayload>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /** Verify user using verification code that send with sms */
  verifySms?: Maybe<VerifySms>;
  verifyToken?: Maybe<Verify>;
};


export type MutationAddPlaceImagesArgs = {
  placeId: Scalars['ID'];
  uploadedImages?: InputMaybe<Array<InputMaybe<PlaceImageInputType>>>;
};


export type MutationAddRelatedFieldToTripArgs = {
  fieldName: Scalars['String'];
  fieldValue: Scalars['ID'];
  trip: Scalars['ID'];
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationChangeUsernameArgs = {
  username: Scalars['String'];
};


export type MutationCreateAccessoryArgs = {
  accessory: AccessoryInput;
  accessoryRelated?: InputMaybe<AccessoryRelatedInput>;
};


export type MutationCreateAccessoryBrandArgs = {
  brand: AccessoryBrandInput;
};


export type MutationCreateAccessoryCategoryArgs = {
  category: AccessoryCategoryInput;
};


export type MutationCreateAccessorySiteArgs = {
  site: AccessorySiteInput;
};


export type MutationCreateExperienceArgs = {
  experienceInput: ExperienceInput;
  experienceRelatedInput?: InputMaybe<ExperienceRelatedInputs>;
};


export type MutationCreateExperienceImagesArgs = {
  imageList: Array<InputMaybe<ExperienceImageInputType>>;
};


export type MutationCreatePlaceArgs = {
  placeData: PlaceInput;
};


export type MutationCreateResidenceArgs = {
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  residenceType: Scalars['ID'];
  stayDuration: Scalars['Int'];
  tripId: Scalars['ID'];
};


export type MutationCreateTourArgs = {
  tourData: TourInput;
};


export type MutationCreateTourReviewArgs = {
  tourReviewInput: TourReviewInput;
};


export type MutationCreateTransferArgs = {
  destination: Scalars['ID'];
  src: Scalars['ID'];
  transferInput?: InputMaybe<TransferInput>;
  transferType: Scalars['ID'];
};


export type MutationCreateTripArgs = {
  country: Scalars['ID'];
  province: Scalars['ID'];
  tripInput: TripInput;
  tripRelatedInput: TripRelatedInput;
};


export type MutationCreateTripImagesArgs = {
  uploadedImages?: InputMaybe<Array<InputMaybe<TripImageInputType>>>;
};


export type MutationCreateTripLikeArgs = {
  tripId: Scalars['ID'];
};


export type MutationCreateTripReviewArgs = {
  input: CreateTripReviewInput;
};


export type MutationCreateTripWithStaticsArgs = {
  country: Scalars['ID'];
  province: Scalars['ID'];
  trip: TripInput;
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePlaceArgs = {
  placeId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteResidenceArgs = {
  residenceId: Scalars['ID'];
  tripId: Scalars['ID'];
};


export type MutationDeleteTourArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTourReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTransferArgs = {
  transferId: Scalars['ID'];
};


export type MutationDeleteTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationDeleteTripImageArgs = {
  imageId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteTripReviewArgs = {
  tripReviewId: Scalars['ID'];
};


export type MutationDislikeTripReviewArgs = {
  review: Scalars['ID'];
};


export type MutationFollowOrUnfollowArgs = {
  input: FollowOrUnfollowInput;
};


export type MutationForgotPasswordSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationGetTourPaymentLinkArgs = {
  batchUserRegister: Scalars['ID'];
};


export type MutationLikeTripReviewArgs = {
  review: Scalars['ID'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationPasswordSetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationPublishTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterSmsArgs = {
  password1: Scalars['String'];
  password2: Scalars['String'];
  phoneNumber: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterTourArgs = {
  registerTourInput: BatchRegisterInput;
};


export type MutationRegisterTourLeaderArgs = {
  tourLeader: TourLeaderInput;
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationResendVerificationSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationResetPasswordSmsArgs = {
  code: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSaveAccessoryArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
};


export type MutationSaveExperienceArgs = {
  experience?: InputMaybe<Scalars['ID']>;
};


export type MutationSavePlaceArgs = {
  place?: InputMaybe<Scalars['ID']>;
};


export type MutationSaveTourArgs = {
  tour?: InputMaybe<Scalars['ID']>;
};


export type MutationSaveTripArgs = {
  trip?: InputMaybe<Scalars['ID']>;
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationSocialAuthArgs = {
  input: SocialAuthInput;
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUndoPublishTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateExperienceArgs = {
  experienceId: Scalars['ID'];
  experienceInput?: InputMaybe<ExperienceInputUpdate>;
  experienceRelatedInput?: InputMaybe<ExperienceRelatedInputs>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateResidenceArgs = {
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  residenceId: Scalars['ID'];
  residenceType?: InputMaybe<Scalars['ID']>;
  stayDuration?: InputMaybe<Scalars['Int']>;
  tripId: Scalars['ID'];
};


export type MutationUpdateTripArgs = {
  country?: InputMaybe<Scalars['ID']>;
  province?: InputMaybe<Scalars['ID']>;
  removeTripRelatedData?: InputMaybe<TripRelatedInput>;
  tripData?: InputMaybe<UpdateTripInput>;
  tripId: Scalars['ID'];
  tripRelatedData?: InputMaybe<TripRelatedInput>;
};


export type MutationUpdateTripReviewArgs = {
  description?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  tripReviewId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationVerifySmsArgs = {
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type NotificationType = {
  __typename?: 'NotificationType';
  dateTime: Scalars['DateTime'];
  id: Scalars['ID'];
  red: Scalars['Boolean'];
  text: Scalars['String'];
  toAll: Scalars['Boolean'];
  user?: Maybe<UserType>;
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSet = {
  __typename?: 'PasswordSet';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PayTourExecution = {
  __typename?: 'PayTourExecution';
  paymentUrl?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PlaceCollectionsType = Node & {
  __typename?: 'PlaceCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  place: PlaceType;
  user: UserType;
};

export type PlaceCollectionsTypeConnection = {
  __typename?: 'PlaceCollectionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceCollectionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PlaceCollectionsType` and its cursor. */
export type PlaceCollectionsTypeEdge = {
  __typename?: 'PlaceCollectionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PlaceCollectionsType>;
};

/** An enumeration. */
export enum PlaceFeelFeel {
  /** Unwell */
  A_1 = 'A_1',
  /** Apathetic */
  A_2 = 'A_2',
  /** Happy */
  A_3 = 'A_3',
  /** Excited */
  A_4 = 'A_4'
}

export type PlaceFeelType = Node & {
  __typename?: 'PlaceFeelType';
  feel: PlaceFeelFeel;
  /** The ID of the object. */
  id: Scalars['ID'];
  place: PlaceType;
  user: UserType;
};

export type PlaceFeelTypeConnection = {
  __typename?: 'PlaceFeelTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceFeelTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PlaceFeelType` and its cursor. */
export type PlaceFeelTypeEdge = {
  __typename?: 'PlaceFeelTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PlaceFeelType>;
};

export type PlaceImageInputType = {
  description?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  subject: Scalars['String'];
};

export type PlaceImageType = Node & {
  __typename?: 'PlaceImageType';
  copyrightName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  placemodelSet: PlaceTypeConnection;
  user: UserType;
};


export type PlaceImageTypePlacemodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlaceImageTypeConnection = {
  __typename?: 'PlaceImageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceImageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PlaceImageType` and its cursor. */
export type PlaceImageTypeEdge = {
  __typename?: 'PlaceImageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PlaceImageType>;
};

export type PlaceInput = {
  description?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PlaceType = Node & {
  __typename?: 'PlaceType';
  activities: TripActivitieTypeConnection;
  address?: Maybe<Scalars['String']>;
  articlesInPlace: ArticleTypeConnection;
  city: CityType;
  country: CountryType;
  defaultImage: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionFa?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facilities?: Maybe<Scalars['JSONString']>;
  feelAverage: Scalars['Int'];
  feelsCount: Scalars['Int'];
  feelsOfPlace: PlaceFeelTypeConnection;
  feelsSum: Scalars['Int'];
  googleId?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  images: PlaceImageTypeConnection;
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  name: Scalars['String'];
  nameEn?: Maybe<Scalars['String']>;
  nameFa?: Maybe<Scalars['String']>;
  openHours?: Maybe<Scalars['JSONString']>;
  phone?: Maybe<Scalars['String']>;
  province: ProvinceType;
  toursOfPlace: TourTypeConnection;
  tripsInPlace: TripTypeConnection;
  type?: Maybe<PlaceTypeType>;
  usersSavedPlace: PlaceCollectionsTypeConnection;
  videos: PlaceVideoTypeConnection;
  website?: Maybe<Scalars['String']>;
};


export type PlaceTypeActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type PlaceTypeArticlesInPlaceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PlaceTypeFeelsOfPlaceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  feel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type PlaceTypeImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PlaceTypeToursOfPlaceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type PlaceTypeTripsInPlaceArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type PlaceTypeUsersSavedPlaceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type PlaceTypeVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type PlaceTypeConnection = {
  __typename?: 'PlaceTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PlaceType` and its cursor. */
export type PlaceTypeEdge = {
  __typename?: 'PlaceTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PlaceType>;
};

export type PlaceTypeType = Node & {
  __typename?: 'PlaceTypeType';
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionFa?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  placesOfType: PlaceTypeConnection;
  svg: Scalars['String'];
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleFa?: Maybe<Scalars['String']>;
};


export type PlaceTypeTypePlacesOfTypeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlaceTypeTypeConnection = {
  __typename?: 'PlaceTypeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceTypeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PlaceTypeType` and its cursor. */
export type PlaceTypeTypeEdge = {
  __typename?: 'PlaceTypeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PlaceTypeType>;
};

export type PlaceVideoType = Node & {
  __typename?: 'PlaceVideoType';
  copyrightName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  placemodelSet: PlaceTypeConnection;
  user: UserType;
  video: Scalars['String'];
};


export type PlaceVideoTypePlacemodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlaceVideoTypeConnection = {
  __typename?: 'PlaceVideoTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceVideoTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PlaceVideoType` and its cursor. */
export type PlaceVideoTypeEdge = {
  __typename?: 'PlaceVideoTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PlaceVideoType>;
};

export type ProfileInputType = {
  about?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['Upload']>;
  tripStatus?: InputMaybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum ProfileModelGender {
  /** female */
  F = 'F',
  /** male */
  M = 'M',
  /** non binary */
  O = 'O'
}

export type ProfileType = Node & {
  __typename?: 'ProfileType';
  about?: Maybe<Scalars['String']>;
  achievements: AchivmentTypeConnection;
  followersCount: Scalars['Int'];
  followingsCount: Scalars['Int'];
  gender?: Maybe<ProfileModelGender>;
  header?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  tripStatus?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserType>;
};


export type ProfileTypeAchievementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ProfileTypeConnection = {
  __typename?: 'ProfileTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProfileType` and its cursor. */
export type ProfileTypeEdge = {
  __typename?: 'ProfileTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
};

export type ProvinceType = Node & {
  __typename?: 'ProvinceType';
  citiesOfProvince: CityTypeConnection;
  country: CountryType;
  /** The ID of the object. */
  id: Scalars['ID'];
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  name: Scalars['String'];
  placesOfProvince: PlaceTypeConnection;
  toursOfProvince: TourTypeConnection;
  tripsOfProvince: TripTypeConnection;
};


export type ProvinceTypeCitiesOfProvinceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProvinceTypePlacesOfProvinceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProvinceTypeToursOfProvinceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type ProvinceTypeTripsOfProvinceArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type ProvinceTypeConnection = {
  __typename?: 'ProvinceTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProvinceTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProvinceType` and its cursor. */
export type ProvinceTypeEdge = {
  __typename?: 'ProvinceTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProvinceType>;
};

export type PublishTripMutation = {
  __typename?: 'PublishTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

export type Query = {
  __typename?: 'Query';
  accessory?: Maybe<AccessoryType>;
  accessoryBrand?: Maybe<AccessoryBrandType>;
  accessoryCategory?: Maybe<AccessoryCategoryType>;
  accessoryCollection?: Maybe<AccessoryCollectionsType>;
  accessorySite?: Maybe<AccessorySiteType>;
  allAccessory?: Maybe<AccessoryTypeConnection>;
  allAccessoryBrand?: Maybe<AccessoryBrandTypeConnection>;
  allAccessoryCategories?: Maybe<AccessoryCategoryTypeConnection>;
  allAccessorySite?: Maybe<AccessorySiteTypeConnection>;
  allActivities?: Maybe<TripActivitieTypeConnection>;
  allArticle?: Maybe<ArticleTypeConnection>;
  allArticleCategories?: Maybe<ArticleCategoryTypeConnection>;
  allCities?: Maybe<CityTypeConnection>;
  allCountries?: Maybe<CountryTypeConnection>;
  allExperience?: Maybe<ExperienceTypeConnection>;
  allMyExperiences?: Maybe<ExperienceTypeConnection>;
  allMyTimeLine?: Maybe<TripTypeConnection>;
  allMyTrip?: Maybe<TripTypeConnection>;
  allPlace?: Maybe<PlaceTypeConnection>;
  allPlaceCategory?: Maybe<PlaceTypeTypeConnection>;
  allProfile?: Maybe<ProfileTypeConnection>;
  allProvinces?: Maybe<ProvinceTypeConnection>;
  allResidenceTypes?: Maybe<ResidenceTypeTypeConnection>;
  allTour?: Maybe<TourTypeConnection>;
  allTourExecution?: Maybe<TourExecutionTypeConnection>;
  allTransfer?: Maybe<TransferTypeConnection>;
  allTransferType?: Maybe<TransferTypeTypeConnection>;
  allTrip?: Maybe<TripTypeConnection>;
  allTripCategories?: Maybe<TripCategoryTypeConnection>;
  allTripImages?: Maybe<TripImageTypeConnection>;
  allTripLikes?: Maybe<TripLikeTypeConnection>;
  allTripReview?: Maybe<TripReviewTypeConnection>;
  allUsers?: Maybe<UserTypeConnection>;
  article?: Maybe<ArticleType>;
  articleCategory?: Maybe<ArticleCategoryType>;
  city?: Maybe<CityType>;
  country?: Maybe<CountryType>;
  discountCollection?: Maybe<DiscountCollectionsType>;
  experience?: Maybe<ExperienceType>;
  followedUser?: Maybe<Scalars['Boolean']>;
  followers?: Maybe<FollowingTypeConnection>;
  following?: Maybe<FollowingTypeConnection>;
  me?: Maybe<UserType>;
  myAccessoryCollection?: Maybe<AccessoryCollectionsTypeConnection>;
  myDiscountCollection?: Maybe<DiscountCollectionsTypeConnection>;
  myExperiences?: Maybe<ExperienceType>;
  myTimeLine?: Maybe<TripType>;
  myTourCollection?: Maybe<PlaceCollectionsTypeConnection>;
  myTripCollection?: Maybe<TripCollectionsTypeConnection>;
  myTrips?: Maybe<TripType>;
  notification?: Maybe<NotificationType>;
  notificationsCount?: Maybe<Scalars['Int']>;
  place?: Maybe<PlaceType>;
  placeCategory?: Maybe<PlaceTypeType>;
  placeCollection?: Maybe<PlaceCollectionsType>;
  profile?: Maybe<ProfileType>;
  province?: Maybe<ProvinceType>;
  residence?: Maybe<ResidenceType>;
  tour?: Maybe<TourType>;
  tourCategories?: Maybe<TourCategoryTypeConnection>;
  tourCollection?: Maybe<TourCollectionsType>;
  tourExecution?: Maybe<TourExecutionType>;
  transfer?: Maybe<TransferType>;
  transferType?: Maybe<TransferTypeType>;
  trip?: Maybe<TripType>;
  tripCategory?: Maybe<TripCategoryType>;
  tripCollection?: Maybe<TripCollectionsType>;
  tripImage?: Maybe<TripImageType>;
  tripLikes?: Maybe<TripLikeType>;
  tripReview?: Maybe<TripReviewType>;
  user?: Maybe<UserType>;
};


export type QueryAccessoryArgs = {
  id: Scalars['ID'];
};


export type QueryAccessoryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryAccessoryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAccessoryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryAccessorySiteArgs = {
  id: Scalars['ID'];
};


export type QueryAllAccessoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  referenceLinks_AccessoryIdInSite?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryAllAccessoryBrandArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllAccessoryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type QueryAllAccessorySiteArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryAllArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllArticleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryAllCitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAllCountriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  alpha2?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllExperienceArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllMyExperiencesArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllMyTimeLineArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAllMyTripArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAllPlaceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAllPlaceCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryAllProfileArgs = {
  about?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllProvincesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllResidenceTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryAllTourArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type QueryAllTourExecutionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tour?: InputMaybe<Scalars['ID']>;
};


export type QueryAllTransferArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  transferType?: InputMaybe<Scalars['ID']>;
};


export type QueryAllTransferTypeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type QueryAllTripArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAllTripCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryAllTripImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryAllTripLikesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryAllTripReviewArgs = {
  after?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dislikesCount?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likesCount?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};


export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
  username_Icontains?: InputMaybe<Scalars['String']>;
  username_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticleCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCityArgs = {
  id: Scalars['ID'];
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryDiscountCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryExperienceArgs = {
  id: Scalars['ID'];
};


export type QueryFollowedUserArgs = {
  username: Scalars['String'];
};


export type QueryFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFollowed?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  followed?: InputMaybe<Scalars['ID']>;
  follower?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFollowed?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  followed?: InputMaybe<Scalars['ID']>;
  follower?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMyAccessoryCollectionArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryMyDiscountCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryMyExperiencesArgs = {
  id: Scalars['ID'];
};


export type QueryMyTimeLineArgs = {
  id: Scalars['ID'];
};


export type QueryMyTourCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryMyTripCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type QueryMyTripsArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryProvinceArgs = {
  id: Scalars['ID'];
};


export type QueryResidenceArgs = {
  id: Scalars['ID'];
};


export type QueryTourArgs = {
  id: Scalars['ID'];
};


export type QueryTourCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type QueryTourCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryTourExecutionArgs = {
  id: Scalars['ID'];
};


export type QueryTransferArgs = {
  id: Scalars['ID'];
};


export type QueryTransferTypeArgs = {
  id: Scalars['ID'];
};


export type QueryTripArgs = {
  id: Scalars['ID'];
};


export type QueryTripCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryTripCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryTripImageArgs = {
  id: Scalars['ID'];
};


export type QueryTripLikesArgs = {
  id: Scalars['ID'];
};


export type QueryTripReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/** Register user and send verification code */
export type RegisterSms = {
  __typename?: 'RegisterSMS';
  success?: Maybe<Scalars['Boolean']>;
};

/** register tour leader.  */
export type RegisterTourLeader = {
  __typename?: 'RegisterTourLeader';
  success?: Maybe<Scalars['Boolean']>;
  tourLeader?: Maybe<TourLeaderType>;
};

/** user register to tour mutation.  */
export type RegisterTourMutation = {
  __typename?: 'RegisterTourMutation';
  batchRegisterTour?: Maybe<BatchRegisterTourType>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Resend sms to user */
export type ResendVerificationSms = {
  __typename?: 'ResendVerificationSMS';
  success?: Maybe<Scalars['Boolean']>;
};

/** reset password */
export type ResetPasswordSms = {
  __typename?: 'ResetPasswordSMS';
  success?: Maybe<Scalars['Boolean']>;
};

export type ResidenceType = Node & {
  __typename?: 'ResidenceType';
  /** The ID of the object. */
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  residenceType: ResidenceTypeType;
  stayDuration: Scalars['Int'];
  trip: TripType;
};

export type ResidenceTypeConnection = {
  __typename?: 'ResidenceTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResidenceTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ResidenceType` and its cursor. */
export type ResidenceTypeEdge = {
  __typename?: 'ResidenceTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ResidenceType>;
};

export type ResidenceTypeType = Node & {
  __typename?: 'ResidenceTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  residenceSet: ResidenceTypeConnection;
  svg: Scalars['String'];
  trip?: Maybe<TripType>;
};


export type ResidenceTypeTypeResidenceSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  residenceType?: InputMaybe<Scalars['ID']>;
  stayDuration?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};

export type ResidenceTypeTypeConnection = {
  __typename?: 'ResidenceTypeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResidenceTypeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ResidenceTypeType` and its cursor. */
export type ResidenceTypeTypeEdge = {
  __typename?: 'ResidenceTypeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ResidenceTypeType>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SaveAccessoryMutation = {
  __typename?: 'SaveAccessoryMutation';
  accessoryCollection?: Maybe<AccessoryCollectionsType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SaveExperienceMutation = {
  __typename?: 'SaveExperienceMutation';
  experienceCollection?: Maybe<ExperienceCollectionsType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SavePlaceMutation = {
  __typename?: 'SavePlaceMutation';
  placeCollection?: Maybe<PlaceCollectionsType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SaveTourMutation = {
  __typename?: 'SaveTourMutation';
  success?: Maybe<Scalars['Boolean']>;
  tourCollection?: Maybe<TourCollectionsType>;
};

export type SaveTripMutation = {
  __typename?: 'SaveTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  tripCollection?: Maybe<TripCollectionsType>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SocialAuthInput = {
  accessToken: Scalars['String'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

/** Social Auth Mutation for Relay */
export type SocialAuthPayload = {
  __typename?: 'SocialAuthPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  social?: Maybe<SocialNode>;
};

export type SocialNode = Node & {
  __typename?: 'SocialNode';
  created: Scalars['DateTime'];
  extraData?: Maybe<Scalars['SocialCamelJSON']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  modified: Scalars['DateTime'];
  provider: Scalars['String'];
  uid: Scalars['String'];
  user: UserType;
};

export type SocialNodeConnection = {
  __typename?: 'SocialNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SocialNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SocialNode` and its cursor. */
export type SocialNodeEdge = {
  __typename?: 'SocialNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SocialNode>;
};

export type TourCategoryType = Node & {
  __typename?: 'TourCategoryType';
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  svg: Scalars['String'];
  title: Scalars['String'];
  toursOfCategory: TourTypeConnection;
};


export type TourCategoryTypeToursOfCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};

export type TourCategoryTypeConnection = {
  __typename?: 'TourCategoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TourCategoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TourCategoryType` and its cursor. */
export type TourCategoryTypeEdge = {
  __typename?: 'TourCategoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TourCategoryType>;
};

export type TourCollectionsType = Node & {
  __typename?: 'TourCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  tour: TourType;
  user: UserType;
};

export type TourCollectionsTypeConnection = {
  __typename?: 'TourCollectionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TourCollectionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TourCollectionsType` and its cursor. */
export type TourCollectionsTypeEdge = {
  __typename?: 'TourCollectionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TourCollectionsType>;
};

export type TourExecutionType = Node & {
  __typename?: 'TourExecutionType';
  batchregistertourSet: BatchRegisterTourTypeConnection;
  capacity: Scalars['Int'];
  capacityLeft: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  discountPrice?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Date']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  price: Scalars['Int'];
  published: Scalars['Boolean'];
  registerEndDate?: Maybe<Scalars['Date']>;
  registerStartDate?: Maybe<Scalars['Date']>;
  registertourmodelSet: UserRegisteredTourTypeConnection;
  requirement?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  tour: TourType;
};


export type TourExecutionTypeBatchregistertourSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type TourExecutionTypeRegistertourmodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type TourExecutionTypeConnection = {
  __typename?: 'TourExecutionTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TourExecutionTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TourExecutionType` and its cursor. */
export type TourExecutionTypeEdge = {
  __typename?: 'TourExecutionTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TourExecutionType>;
};

export type TourInput = {
  activities?: InputMaybe<Scalars['UUID']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  published: Scalars['Boolean'];
  startDate?: InputMaybe<Scalars['Date']>;
  title: Scalars['String'];
};

export type TourLeaderInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tourLeadingId?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum TourLeaderTourLeadingSpecialType {
  /** طبیعت‌گردی-حیات وحش */
  ECOWT = 'ECOWT'
}

/** An enumeration. */
export enum TourLeaderTourLeadingType {
  /** راهنمای داخلی */
  DG = 'DG',
  /** راهنمای بین‌المللی */
  IG = 'IG',
  /** راهنمای تخصصی */
  SG = 'SG'
}

export type TourLeaderType = {
  __typename?: 'TourLeaderType';
  id: Scalars['ID'];
  name: Scalars['String'];
  successfulToursCount: Scalars['Int'];
  tourLeadingId: Scalars['String'];
  tourLeadingSpecialType?: Maybe<TourLeaderTourLeadingSpecialType>;
  tourLeadingType: TourLeaderTourLeadingType;
  tourmodelSet: TourTypeConnection;
  user: UserType;
};


export type TourLeaderTypeTourmodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};

export type TourLikeType = {
  __typename?: 'TourLikeType';
  id: Scalars['ID'];
  tour: TourType;
  user: UserType;
};

export type TourReviewInput = {
  description?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
  tour: Scalars['ID'];
};

export type TourReviewType = {
  __typename?: 'TourReviewType';
  author: UserType;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  dislikesCount: Scalars['Int'];
  id: Scalars['ID'];
  likesCount: Scalars['Int'];
  tour: TourType;
};

export type TourType = Node & {
  __typename?: 'TourType';
  activities: TripActivitieTypeConnection;
  category?: Maybe<TourCategoryType>;
  cities: CityTypeConnection;
  country: CountryType;
  createdAt: Scalars['DateTime'];
  days?: Maybe<Scalars['Int']>;
  defaultImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  likes: Scalars['Int'];
  places: PlaceTypeConnection;
  province?: Maybe<ProvinceType>;
  published: Scalars['Boolean'];
  reviewsOfTour: Array<TourReviewType>;
  title: Scalars['String'];
  tourExecution: TourExecutionTypeConnection;
  tourLeader: TourLeaderType;
  tourLike: Array<TourLikeType>;
  usersSavedTour: TourCollectionsTypeConnection;
  verified: Scalars['Boolean'];
};


export type TourTypeActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type TourTypeCitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TourTypePlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TourTypeTourExecutionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tour?: InputMaybe<Scalars['ID']>;
};


export type TourTypeUsersSavedTourArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tour?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type TourTypeConnection = {
  __typename?: 'TourTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TourTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TourType` and its cursor. */
export type TourTypeEdge = {
  __typename?: 'TourTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TourType>;
};

export type TransferInput = {
  duration?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Date']>;
};

export type TransferType = Node & {
  __typename?: 'TransferType';
  destination: CityType;
  duration?: Maybe<Scalars['Int']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  src: CityType;
  startTime?: Maybe<Scalars['DateTime']>;
  transferType?: Maybe<TransferTypeType>;
  tripsInTransfer: TripTypeConnection;
};


export type TransferTypeTripsInTransferArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type TransferTypeConnection = {
  __typename?: 'TransferTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransferTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TransferType` and its cursor. */
export type TransferTypeEdge = {
  __typename?: 'TransferTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TransferType>;
};

export type TransferTypeType = Node & {
  __typename?: 'TransferTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  svg?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  transfermodelSet: TransferTypeConnection;
};


export type TransferTypeTypeTransfermodelSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  transferType?: InputMaybe<Scalars['ID']>;
};

export type TransferTypeTypeConnection = {
  __typename?: 'TransferTypeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransferTypeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TransferTypeType` and its cursor. */
export type TransferTypeTypeEdge = {
  __typename?: 'TransferTypeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TransferTypeType>;
};

export type TripActivitieType = Node & {
  __typename?: 'TripActivitieType';
  articlesOfActivity: ArticleTypeConnection;
  description?: Maybe<Scalars['String']>;
  experiencemodelSet: ExperienceTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  placeActivities: PlaceTypeConnection;
  svg?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleFa?: Maybe<Scalars['String']>;
  toursActivities: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
};


export type TripActivitieTypeArticlesOfActivityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type TripActivitieTypeExperiencemodelSetArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type TripActivitieTypePlaceActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TripActivitieTypeToursActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title_Iexact?: InputMaybe<Scalars['String']>;
};


export type TripActivitieTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type TripActivitieTypeConnection = {
  __typename?: 'TripActivitieTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripActivitieTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripActivitieType` and its cursor. */
export type TripActivitieTypeEdge = {
  __typename?: 'TripActivitieTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripActivitieType>;
};

export type TripCategoryType = Node & {
  __typename?: 'TripCategoryType';
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionFa?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleFa?: Maybe<Scalars['String']>;
  tripmodelSet: TripTypeConnection;
};


export type TripCategoryTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type TripCategoryTypeConnection = {
  __typename?: 'TripCategoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripCategoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripCategoryType` and its cursor. */
export type TripCategoryTypeEdge = {
  __typename?: 'TripCategoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripCategoryType>;
};

export type TripCollectionsType = Node & {
  __typename?: 'TripCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  trip: TripType;
  user: UserType;
};

export type TripCollectionsTypeConnection = {
  __typename?: 'TripCollectionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripCollectionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripCollectionsType` and its cursor. */
export type TripCollectionsTypeEdge = {
  __typename?: 'TripCollectionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripCollectionsType>;
};

export type TripImageInputType = {
  description?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  subject: Scalars['String'];
};

export type TripImageType = Node & {
  __typename?: 'TripImageType';
  copyrightName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  tripmodelSet: TripTypeConnection;
  user: UserType;
};


export type TripImageTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type TripImageTypeConnection = {
  __typename?: 'TripImageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripImageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripImageType` and its cursor. */
export type TripImageTypeEdge = {
  __typename?: 'TripImageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripImageType>;
};

export type TripInput = {
  checkList?: InputMaybe<Scalars['JSONString']>;
  costs?: InputMaybe<Scalars['JSONString']>;
  defaultImage?: InputMaybe<Scalars['Upload']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  gpsTrack?: InputMaybe<Scalars['JSONString']>;
  published: Scalars['Boolean'];
  startDate?: InputMaybe<Scalars['Date']>;
  title: Scalars['String'];
  todoList?: InputMaybe<Scalars['JSONString']>;
  tripMap?: InputMaybe<Scalars['JSONString']>;
};

export type TripLikeType = Node & {
  __typename?: 'TripLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  trip: TripType;
  user: UserType;
};

export type TripLikeTypeConnection = {
  __typename?: 'TripLikeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripLikeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripLikeType` and its cursor. */
export type TripLikeTypeEdge = {
  __typename?: 'TripLikeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripLikeType>;
};

export type TripRelatedInput = {
  accessories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  companions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  experiences?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  places?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  transfers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** An enumeration. */
export enum TripReviewLikeModelValue {
  /** Up */
  A_1 = 'A_1',
  /** Down */
  _1 = '_1'
}

export type TripReviewLikeType = Node & {
  __typename?: 'TripReviewLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  review: TripReviewType;
  user: UserType;
  value: TripReviewLikeModelValue;
};

export type TripReviewLikeTypeConnection = {
  __typename?: 'TripReviewLikeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripReviewLikeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripReviewLikeType` and its cursor. */
export type TripReviewLikeTypeEdge = {
  __typename?: 'TripReviewLikeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripReviewLikeType>;
};

export type TripReviewType = Node & {
  __typename?: 'TripReviewType';
  author: UserType;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  dislikesCount: Scalars['Int'];
  /** The ID of the object. */
  id: Scalars['ID'];
  likesCount: Scalars['Int'];
  likesOfTripReview: TripReviewLikeTypeConnection;
  trip: TripType;
  tripmodelSet: TripTypeConnection;
  userLiked?: Maybe<Scalars['String']>;
};


export type TripReviewTypeLikesOfTripReviewArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};


export type TripReviewTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type TripReviewTypeConnection = {
  __typename?: 'TripReviewTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripReviewTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripReviewType` and its cursor. */
export type TripReviewTypeEdge = {
  __typename?: 'TripReviewTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripReviewType>;
};

/** Trip description */
export type TripType = Node & {
  __typename?: 'TripType';
  accessories: AccessoryTypeConnection;
  activities: TripActivitieTypeConnection;
  author: UserType;
  categories: TripCategoryTypeConnection;
  checkList?: Maybe<Scalars['GenericScalar']>;
  cities: CityTypeConnection;
  companions: UserTypeConnection;
  costs?: Maybe<Scalars['GenericScalar']>;
  country: CountryType;
  createdAt: Scalars['DateTime'];
  defaultImage: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  experiences?: Maybe<ExperienceTypeConnection>;
  gpsTrack?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  images: TripImageTypeConnection;
  isPrivate: Scalars['Boolean'];
  likes: Scalars['Int'];
  places: PlaceTypeConnection;
  province: ProvinceType;
  published: Scalars['Boolean'];
  residencesOfTrip: ResidenceTypeConnection;
  reviews: TripReviewTypeConnection;
  reviewsOfTrip: TripReviewTypeConnection;
  startDate?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  todoList?: Maybe<Scalars['GenericScalar']>;
  transfers: TransferTypeConnection;
  tripLikes?: Maybe<TripLikeType>;
  tripMap?: Maybe<Scalars['JSONString']>;
  userLiked?: Maybe<Scalars['Boolean']>;
  userSaved?: Maybe<Scalars['Boolean']>;
  usersSavedTrip: TripCollectionsTypeConnection;
  videos: TripVideoTypeConnection;
  viewsCount: Scalars['Int'];
};


/** Trip description */
export type TripTypeAccessoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  referenceLinks_AccessoryIdInSite?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: InputMaybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: InputMaybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeCitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Trip description */
export type TripTypeCompanionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
  username_Icontains?: InputMaybe<Scalars['String']>;
  username_Istartswith?: InputMaybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeExperiencesArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


/** Trip description */
export type TripTypeImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypePlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['ID']>;
  city_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  city_Name_Iexact?: InputMaybe<Scalars['String']>;
  city_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name_Iexact?: InputMaybe<Scalars['String']>;
  name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  province?: InputMaybe<Scalars['ID']>;
  province_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  province_Name_Iexact?: InputMaybe<Scalars['String']>;
  province_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['ID']>;
  type_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type_Title_Iexact?: InputMaybe<Scalars['String']>;
  type_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Trip description */
export type TripTypeResidencesOfTripArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  residenceType?: InputMaybe<Scalars['ID']>;
  stayDuration?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dislikesCount?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likesCount?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeReviewsOfTripArgs = {
  after?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dislikesCount?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likesCount?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeTransfersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  transferType?: InputMaybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeUsersSavedTripArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type TripTypeConnection = {
  __typename?: 'TripTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripType` and its cursor. */
export type TripTypeEdge = {
  __typename?: 'TripTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripType>;
};

export type TripVideoType = Node & {
  __typename?: 'TripVideoType';
  copyrightName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  tripmodelSet: TripTypeConnection;
  user: UserType;
  video: Scalars['String'];
};


export type TripVideoTypeTripmodelSetArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type TripVideoTypeConnection = {
  __typename?: 'TripVideoTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripVideoTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TripVideoType` and its cursor. */
export type TripVideoTypeEdge = {
  __typename?: 'TripVideoTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TripVideoType>;
};

export type UnPublishTripMutation = {
  __typename?: 'UnPublishTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateExperienceMutation = {
  __typename?: 'UpdateExperienceMutation';
  experience?: Maybe<ExperienceType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileInputType>;
};

export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileType>;
};

/** update residence review mutation. */
export type UpdateResidence = {
  __typename?: 'UpdateResidence';
  success?: Maybe<Scalars['Boolean']>;
};

/** update trip review mutation. */
export type UpdateTrip = {
  __typename?: 'UpdateTrip';
  success?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

export type UpdateTripInput = {
  checkList?: InputMaybe<Scalars['JSONString']>;
  costs?: InputMaybe<Scalars['JSONString']>;
  defaultImage?: InputMaybe<Scalars['Upload']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  gpsTrack?: InputMaybe<Scalars['JSONString']>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  todoList?: InputMaybe<Scalars['JSONString']>;
  tripMap?: InputMaybe<Scalars['JSONString']>;
};

/** update trip review mutation. */
export type UpdateTripReview = {
  __typename?: 'UpdateTripReview';
  review?: Maybe<TripReviewType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  userInputs?: InputMaybe<UserInputType>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type UserInputType = {
  avatar?: InputMaybe<Scalars['Upload']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  acceptedTerms: Scalars['Boolean'];
  archived?: Maybe<Scalars['Boolean']>;
  articleReviews: ArticleReviewTypeConnection;
  articles: ArticleTypeConnection;
  avatar: Scalars['String'];
  batchregistertourSet: BatchRegisterTourTypeConnection;
  dateJoined: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  experienceImagesOfUser: ExperienceImageTypeConnection;
  experienceVideosOfUser: ExperienceVideoTypeConnection;
  experiencesOfUser: ExperienceTypeConnection;
  feelsOfUser: PlaceFeelTypeConnection;
  firstName: Scalars['String'];
  followerUsers: FollowingTypeConnection;
  followingUsers: FollowingTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  likedAccessories: AccessoryLikeTypeConnection;
  likedArticles: ArticleReviewLikeTypeConnection;
  likesTripReviewOfUser: TripReviewLikeTypeConnection;
  notificationmodelSet: Array<NotificationType>;
  phoneNumber?: Maybe<Scalars['String']>;
  pk?: Maybe<Scalars['Int']>;
  placesImages: PlaceImageTypeConnection;
  placesVideos: PlaceVideoTypeConnection;
  profilemodel?: Maybe<ProfileType>;
  requirementTripLikes: TripLikeTypeConnection;
  savedAccessories: AccessoryCollectionsTypeConnection;
  savedDiscounts: DiscountCollectionsTypeConnection;
  savedExperiences: ExperienceCollectionsTypeConnection;
  savedPlaces: PlaceCollectionsTypeConnection;
  savedTours: TourCollectionsTypeConnection;
  savedTrips: TripCollectionsTypeConnection;
  secondaryEmail?: Maybe<Scalars['String']>;
  socialAuth: SocialNodeConnection;
  tourLike: Array<TourLikeType>;
  tourReviewsOfUser: Array<TourReviewType>;
  tourleader?: Maybe<TourLeaderType>;
  tripImages: TripImageTypeConnection;
  tripReviewsOfUser: TripReviewTypeConnection;
  tripVideos: TripVideoTypeConnection;
  trips: TripTypeConnection;
  tripsInCompanion: TripTypeConnection;
  userType: UserUserType;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};


export type UserNodeArticleReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeBatchregistertourSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeExperienceImagesOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeExperienceVideosOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeExperiencesOfUserArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeFeelsOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  feel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeFollowerUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFollowed?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  followed?: InputMaybe<Scalars['ID']>;
  follower?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeFollowingUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFollowed?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  followed?: InputMaybe<Scalars['ID']>;
  follower?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeLikedAccessoriesArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeLikedArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeLikesTripReviewOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};


export type UserNodePlacesImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodePlacesVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeRequirementTripLikesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSavedAccessoriesArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSavedDiscountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSavedExperiencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSavedPlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSavedToursArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tour?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSavedTripsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeSocialAuthArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UserNodeTripImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserNodeTripReviewsOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dislikesCount?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likesCount?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};


export type UserNodeTripVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodeTripsArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type UserNodeTripsInCompanionArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type UserRegisterTourInput = {
  familyName: Scalars['String'];
  firstName: Scalars['String'];
  nationalId: Scalars['String'];
  phone: Scalars['String'];
  vaccinated: Scalars['Boolean'];
};

export type UserRegisteredTourType = Node & {
  __typename?: 'UserRegisteredTourType';
  batch: BatchRegisterTourType;
  familyName: Scalars['String'];
  firstName: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  nationalId: Scalars['String'];
  phone: Scalars['String'];
  tourExecution: TourExecutionType;
  vaccinated: Scalars['Boolean'];
};

export type UserRegisteredTourTypeConnection = {
  __typename?: 'UserRegisteredTourTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserRegisteredTourTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserRegisteredTourType` and its cursor. */
export type UserRegisteredTourTypeEdge = {
  __typename?: 'UserRegisteredTourTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserRegisteredTourType>;
};

export type UserType = Node & {
  __typename?: 'UserType';
  archived: Scalars['Boolean'];
  articleReviews: ArticleReviewTypeConnection;
  articles: ArticleTypeConnection;
  avatar: Scalars['String'];
  batchregistertourSet: BatchRegisterTourTypeConnection;
  dateJoined: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  experienceImagesOfUser: ExperienceImageTypeConnection;
  experienceVideosOfUser: ExperienceVideoTypeConnection;
  experiencesOfUser: ExperienceTypeConnection;
  feelsOfUser: PlaceFeelTypeConnection;
  firstName: Scalars['String'];
  followerUsers: FollowingTypeConnection;
  followingUsers: FollowingTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  likedAccessories: AccessoryLikeTypeConnection;
  likedArticles: ArticleReviewLikeTypeConnection;
  likesTripReviewOfUser: TripReviewLikeTypeConnection;
  notificationmodelSet: Array<NotificationType>;
  placesImages: PlaceImageTypeConnection;
  placesVideos: PlaceVideoTypeConnection;
  profilemodel?: Maybe<ProfileType>;
  requirementTripLikes: TripLikeTypeConnection;
  savedAccessories: AccessoryCollectionsTypeConnection;
  savedDiscounts: DiscountCollectionsTypeConnection;
  savedExperiences: ExperienceCollectionsTypeConnection;
  savedPlaces: PlaceCollectionsTypeConnection;
  savedTours: TourCollectionsTypeConnection;
  savedTrips: TripCollectionsTypeConnection;
  socialAuth: SocialNodeConnection;
  tourLike: Array<TourLikeType>;
  tourReviewsOfUser: Array<TourReviewType>;
  tourleader?: Maybe<TourLeaderType>;
  tripImages: TripImageTypeConnection;
  tripReviewsOfUser: TripReviewTypeConnection;
  tripVideos: TripVideoTypeConnection;
  trips: TripTypeConnection;
  tripsInCompanion: TripTypeConnection;
  userType: UserUserType;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};


export type UserTypeArticleReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  category_Title?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeBatchregistertourSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeExperienceImagesOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeExperienceVideosOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeExperiencesOfUserArgs = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeFeelsOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  feel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeFollowerUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFollowed?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  followed?: InputMaybe<Scalars['ID']>;
  follower?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeFollowingUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFollowed?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  followed?: InputMaybe<Scalars['ID']>;
  follower?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeLikedAccessoriesArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeLikedArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeLikesTripReviewOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};


export type UserTypePlacesImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypePlacesVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeRequirementTripLikesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSavedAccessoriesArgs = {
  accessory?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSavedDiscountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSavedExperiencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSavedPlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSavedToursArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tour?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSavedTripsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeSocialAuthArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UserTypeTripImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['ID']>;
};


export type UserTypeTripReviewsOfUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dislikesCount?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likesCount?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  trip?: InputMaybe<Scalars['ID']>;
};


export type UserTypeTripVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypeTripsArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};


export type UserTypeTripsInCompanionArgs = {
  activities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  activities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  activities_Title_Iexact?: InputMaybe<Scalars['String']>;
  activities_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  categories_Title_Iexact?: InputMaybe<Scalars['String']>;
  categories_Title_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cities_Iexact?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cities_In?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>>>>>;
  cities_Name_Iexact?: InputMaybe<Scalars['String']>;
  cities_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['ID']>;
  country_In?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_Name_Iexact?: InputMaybe<Scalars['String']>;
  country_Name_In?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
};

/** An enumeration. */
export enum UserUserType {
  /** normal user */
  N = 'N',
  /** tour leader */
  T = 'T'
}

export type Verify = {
  __typename?: 'Verify';
  payload?: Maybe<Scalars['GenericScalar']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Verify user using verification code that send with sms */
export type VerifySms = {
  __typename?: 'VerifySMS';
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifySmsMutationVariables = Exact<{
  verifySmsCode: Scalars['String'];
  verifySmsPhoneNumber: Scalars['String'];
}>;


export type VerifySmsMutation = { __typename?: 'Mutation', verifySms?: { __typename?: 'VerifySMS', success?: boolean | null } | null };

export type RegisterSmsMutationVariables = Exact<{
  registerSmsPassword1: Scalars['String'];
  registerSmsPassword2: Scalars['String'];
  registerSmsPhoneNumber: Scalars['String'];
  registerSmsUsername?: InputMaybe<Scalars['String']>;
}>;


export type RegisterSmsMutation = { __typename?: 'Mutation', registerSms?: { __typename?: 'RegisterSMS', success?: boolean | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshTokenRefreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'Refresh', token?: string | null, payload?: any | null, refreshToken?: string | null } | null };

export type ResetPasswordSmsMutationVariables = Exact<{
  resetPasswordSmsCode: Scalars['String'];
  resetPasswordSmsNewPassword1: Scalars['String'];
  resetPasswordSmsNewPassword2: Scalars['String'];
  resetPasswordSmsPhoneNumber: Scalars['String'];
}>;


export type ResetPasswordSmsMutation = { __typename?: 'Mutation', resetPasswordSms?: { __typename?: 'ResetPasswordSMS', success?: boolean | null } | null };

export type ForgotPasswordSmsMutationVariables = Exact<{
  forgotPasswordSmsPhoneNumber: Scalars['String'];
}>;


export type ForgotPasswordSmsMutation = { __typename?: 'Mutation', forgotPasswordSms?: { __typename?: 'ForgotPasswordSMS', success?: boolean | null } | null };

export type TokenAuthMutationVariables = Exact<{
  tokenAuthPassword: Scalars['String'];
  tokenAuthPhoneNumber?: InputMaybe<Scalars['String']>;
  tokenAuthEmail?: InputMaybe<Scalars['String']>;
  tokenAuthUsername?: InputMaybe<Scalars['String']>;
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token?: string | null, success?: boolean | null, refreshToken?: string | null } | null };

export type ResendVerificationSmsMutationVariables = Exact<{
  resendVerificationSmsPhoneNumber: Scalars['String'];
}>;


export type ResendVerificationSmsMutation = { __typename?: 'Mutation', resendVerificationSms?: { __typename?: 'ResendVerificationSMS', success?: boolean | null } | null };

export type PasswordChangeMutationVariables = Exact<{
  passwordChangeOldPassword: Scalars['String'];
  passwordChangeNewPassword1: Scalars['String'];
  passwordChangeNewPassword2: Scalars['String'];
}>;


export type PasswordChangeMutation = { __typename?: 'Mutation', passwordChange?: { __typename?: 'ChangePasswordMutation', success?: boolean | null } | null };

export type UsernameChangeMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UsernameChangeMutation = { __typename?: 'Mutation', changeUsername?: { __typename?: 'ChangeUsernameMutation', success?: boolean | null } | null };

export type CreateSinglTransferMutationVariables = Exact<{
  src: Scalars['ID'];
  destination: Scalars['ID'];
  transferInput?: InputMaybe<TransferInput>;
  transferType: Scalars['ID'];
}>;


export type CreateSinglTransferMutation = { __typename?: 'Mutation', createTransfer?: { __typename?: 'CreateTransferMutation', success?: boolean | null, transfer?: { __typename?: 'TransferType', id: string, duration?: number | null, startTime?: any | null, src: { __typename?: 'CityType', name: string, latitude: any, longitude: any, id: string }, destination: { __typename?: 'CityType', name: string, latitude: any, longitude: any, id: string }, transferType?: { __typename?: 'TransferTypeType', id: string, title: string, svg?: string | null } | null } | null } | null };

export type DeleteSingleTransferMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSingleTransferMutation = { __typename?: 'Mutation', deleteTransfer?: { __typename?: 'DeleteTransferMutation', success?: boolean | null } | null };

export type LikeTripMutationVariables = Exact<{
  createTripLikeTripId: Scalars['ID'];
}>;


export type LikeTripMutation = { __typename?: 'Mutation', createTripLike?: { __typename?: 'CreateTripLike', success?: boolean | null, like?: boolean | null, trip?: { __typename?: 'TripType', id: string, likes: number, userLiked?: boolean | null } | null } | null };

export type CreateTripReviewMutationVariables = Exact<{
  createTripReviewInput: CreateTripReviewInput;
}>;


export type CreateTripReviewMutation = { __typename?: 'Mutation', createTripReview?: { __typename?: 'CreateTripReviewPayload', success?: boolean | null } | null };

export type CreateInitialTripMutationVariables = Exact<{
  createTripTripInput: TripInput;
  createTripTripRelatedInput: TripRelatedInput;
  createTripProvince: Scalars['ID'];
  createTripCountry: Scalars['ID'];
  startDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
}>;


export type CreateInitialTripMutation = { __typename?: 'Mutation', createTrip?: { __typename?: 'CreateTrip', success?: boolean | null, trip?: { __typename?: 'TripType', id: string } | null } | null };

export type UpdateTripMutationVariables = Exact<{
  tripData?: InputMaybe<UpdateTripInput>;
  tripId: Scalars['ID'];
  removeTripRelatedData?: InputMaybe<TripRelatedInput>;
  tripRelatedData?: InputMaybe<TripRelatedInput>;
  province?: InputMaybe<Scalars['ID']>;
  country?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateTripMutation = { __typename?: 'Mutation', updateTrip?: { __typename?: 'UpdateTrip', success?: boolean | null, trip?: { __typename?: 'TripType', id: string } | null } | null };

export type LikeTripReviewMutationMutationVariables = Exact<{
  likeTripReviewReview: Scalars['ID'];
}>;


export type LikeTripReviewMutationMutation = { __typename?: 'Mutation', likeTripReview?: { __typename?: 'LikeTripReviewMutation', tripReviewLike?: { __typename?: 'TripReviewLikeType', value: TripReviewLikeModelValue, review: { __typename?: 'TripReviewType', likesCount: number, dislikesCount: number } } | null } | null };

export type DislikeTripReviewMutationMutationVariables = Exact<{
  dislikeTripReviewReview: Scalars['ID'];
}>;


export type DislikeTripReviewMutationMutation = { __typename?: 'Mutation', dislikeTripReview?: { __typename?: 'DisLikeTripReviewMutation', tripReviewLike?: { __typename?: 'TripReviewLikeType', value: TripReviewLikeModelValue, review: { __typename?: 'TripReviewType', dislikesCount: number, likesCount: number } } | null } | null };

export type SaveTripMutationMutationVariables = Exact<{
  saveTripTrip?: InputMaybe<Scalars['ID']>;
}>;


export type SaveTripMutationMutation = { __typename?: 'Mutation', saveTrip?: { __typename?: 'SaveTripMutation', success?: boolean | null, tripCollection?: { __typename?: 'TripCollectionsType', trip: { __typename?: 'TripType', userSaved?: boolean | null } } | null } | null };

export type CreateExperienceImageMutationVariables = Exact<{
  imageList: Array<InputMaybe<ExperienceImageInputType>> | InputMaybe<ExperienceImageInputType>;
}>;


export type CreateExperienceImageMutation = { __typename?: 'Mutation', createExperienceImages?: { __typename?: 'CreateExperienceImagesMutation', success?: boolean | null, images?: Array<{ __typename?: 'ExperienceImageType', id: string, image: string } | null> | null } | null };

export type CreateExperinceMutationMutationVariables = Exact<{
  experienceInput: ExperienceInput;
  experienceRelatedInput?: InputMaybe<ExperienceRelatedInputs>;
}>;


export type CreateExperinceMutationMutation = { __typename?: 'Mutation', createExperience?: { __typename?: 'CreateExperienceMutation', success?: boolean | null, experience?: { __typename?: 'ExperienceType', id: string, description?: string | null, title: string, images: { __typename?: 'ExperienceImageTypeConnection', edges: Array<{ __typename?: 'ExperienceImageTypeEdge', node?: { __typename?: 'ExperienceImageType', id: string, image: string } | null } | null> }, activities: { __typename?: 'TripActivitieTypeConnection', edges: Array<{ __typename?: 'TripActivitieTypeEdge', node?: { __typename?: 'TripActivitieType', id: string, titleFa?: string | null, svg?: string | null } | null } | null> } } | null } | null };

export type CreateResidenceMutationVariables = Exact<{
  name: Scalars['String'];
  residenceType: Scalars['ID'];
  stayDuration: Scalars['Int'];
  tripId: Scalars['ID'];
  longitude?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
}>;


export type CreateResidenceMutation = { __typename?: 'Mutation', createResidence?: { __typename?: 'CreateResidence', success?: boolean | null } | null };

export type DeleteResidenceMutationVariables = Exact<{
  residenceId: Scalars['ID'];
  tripId: Scalars['ID'];
}>;


export type DeleteResidenceMutation = { __typename?: 'Mutation', deleteResidence?: { __typename?: 'DeleteResidence', success?: boolean | null } | null };

export type UpdateResidenceMutationVariables = Exact<{
  residenceId: Scalars['ID'];
  tripId: Scalars['ID'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  residenceType?: InputMaybe<Scalars['ID']>;
  stayDuration?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateResidenceMutation = { __typename?: 'Mutation', updateResidence?: { __typename?: 'UpdateResidence', success?: boolean | null } | null };

export type UpdateProfileMutationVariables = Exact<{
  updateProfileInput: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'UpdateProfilePayload', profile?: { __typename?: 'ProfileType', about?: string | null, tripStatus?: boolean | null, header?: string | null, user?: { __typename?: 'UserType', id: string } | null } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserPayload', user?: { __typename?: 'UserType', avatar: string, username: string, id: string } | null } | null };

export type FollowOrUnfollowMutationVariables = Exact<{
  followOrUnfollowInput: FollowOrUnfollowInput;
}>;


export type FollowOrUnfollowMutation = { __typename?: 'Mutation', followOrUnfollow?: { __typename?: 'FollowOrUnfollowPayload', followStatus?: boolean | null } | null };

export type SearchAccessoryQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type SearchAccessoryQuery = { __typename?: 'Query', allAccessory?: { __typename?: 'AccessoryTypeConnection', edges: Array<{ __typename?: 'AccessoryTypeEdge', node?: { __typename?: 'AccessoryType', id: string, name: string, imageLink?: string | null, category: { __typename?: 'AccessoryCategoryType', id: string, title: string } } | null } | null> } | null };

export type GetAllResidenceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllResidenceTypesQuery = { __typename?: 'Query', allResidenceTypes?: { __typename?: 'ResidenceTypeTypeConnection', edges: Array<{ __typename?: 'ResidenceTypeTypeEdge', node?: { __typename?: 'ResidenceTypeType', svg: string, name: string, id: string } | null } | null> } | null };

export type AllArticleQueryVariables = Exact<{
  allArticleOffset?: InputMaybe<Scalars['Int']>;
  allArticleBefore?: InputMaybe<Scalars['String']>;
  allArticleAfter?: InputMaybe<Scalars['String']>;
  allArticleFirst?: InputMaybe<Scalars['Int']>;
  allArticleLast?: InputMaybe<Scalars['Int']>;
  allArticleCategory?: InputMaybe<Scalars['ID']>;
}>;


export type AllArticleQuery = { __typename?: 'Query', allArticle?: { __typename?: 'ArticleTypeConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'ArticleTypeEdge', cursor: string, node?: { __typename?: 'ArticleType', id: string, title: string, shortDescription?: string | null, likes: number, timeToRead?: number | null, image?: string | null, author: { __typename?: 'UserType', username: string, avatar: string }, category?: { __typename?: 'ArticleCategoryType', title: string } | null } | null } | null> } | null };

export type AllArticleCategoryiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticleCategoryiesQuery = { __typename?: 'Query', allArticleCategories?: { __typename?: 'ArticleCategoryTypeConnection', edges: Array<{ __typename?: 'ArticleCategoryTypeEdge', node?: { __typename?: 'ArticleCategoryType', id: string, title: string, svg: string } | null } | null> } | null };

export type ArticleQueryVariables = Exact<{
  articleId: Scalars['ID'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleType', title: string, shortDescription?: string | null, content: string, createdAt: any, likes: number, timeToRead?: number | null, image?: string | null, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, category?: { __typename?: 'ArticleCategoryType', title: string, id: string } | null, activities: { __typename?: 'TripActivitieTypeConnection', edges: Array<{ __typename?: 'TripActivitieTypeEdge', node?: { __typename?: 'TripActivitieType', title: string, svg?: string | null } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', name: string } | null } | null> }, accessories: { __typename?: 'AccessoryTypeConnection', edges: Array<{ __typename?: 'AccessoryTypeEdge', node?: { __typename?: 'AccessoryType', name: string, image?: string | null, imageLink?: string | null } | null } | null> }, reviewsOfArticle: { __typename?: 'ArticleReviewTypeConnection', edges: Array<{ __typename?: 'ArticleReviewTypeEdge', node?: { __typename?: 'ArticleReviewType', description: string, author: { __typename?: 'UserType', username: string, avatar: string } } | null } | null> } } | null };

export type AllTourCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTourCategoriesQuery = { __typename?: 'Query', tourCategories?: { __typename?: 'TourCategoryTypeConnection', edges: Array<{ __typename?: 'TourCategoryTypeEdge', node?: { __typename?: 'TourCategoryType', id: string, title: string, image?: string | null, svg: string } | null } | null> } | null };

export type AllTourQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTourQuery = { __typename?: 'Query', allTour?: { __typename?: 'TourTypeConnection', edges: Array<{ __typename?: 'TourTypeEdge', node?: { __typename?: 'TourType', id: string, days?: number | null, title: string, description?: string | null, defaultImage?: string | null, likes: number, tourLeader: { __typename?: 'TourLeaderType', id: string, name: string, user: { __typename?: 'UserType', avatar: string, username: string } }, category?: { __typename?: 'TourCategoryType', title: string } | null, province?: { __typename?: 'ProvinceType', name: string } | null } | null } | null> } | null };

export type AllTransferTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransferTypesQuery = { __typename?: 'Query', allTransferType?: { __typename?: 'TransferTypeTypeConnection', edges: Array<{ __typename?: 'TransferTypeTypeEdge', node?: { __typename?: 'TransferTypeType', id: string, title: string, svg?: string | null } | null } | null> } | null };

export type AllTripQueryVariables = Exact<{
  allTripOffset?: InputMaybe<Scalars['Int']>;
  allTripBefore?: InputMaybe<Scalars['String']>;
  allTripAfter?: InputMaybe<Scalars['String']>;
  allTripFirst?: InputMaybe<Scalars['Int']>;
  allTripLast?: InputMaybe<Scalars['Int']>;
  allTripCategories?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>> | InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>>;
}>;


export type AllTripQuery = { __typename?: 'Query', allTrip?: { __typename?: 'TripTypeConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'TripTypeEdge', cursor: string, node?: { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, viewsCount: number, defaultImage: string, likes: number, userLiked?: boolean | null, published: boolean, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null } | null } | null> } | null };

export type AllTripListQueryVariables = Exact<{
  allTripOffset?: InputMaybe<Scalars['Int']>;
  allTripBefore?: InputMaybe<Scalars['String']>;
  allTripAfter?: InputMaybe<Scalars['String']>;
  allTripFirst?: InputMaybe<Scalars['Int']>;
  allTripLast?: InputMaybe<Scalars['Int']>;
  allTripCategories?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>> | InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>>;
}>;


export type AllTripListQuery = { __typename?: 'Query', allTrip?: { __typename?: 'TripTypeConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'TripTypeEdge', cursor: string, node?: { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, viewsCount: number, defaultImage: string, likes: number, userLiked?: boolean | null, published: boolean, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, activities: { __typename?: 'TripActivitieTypeConnection', edges: Array<{ __typename?: 'TripActivitieTypeEdge', node?: { __typename?: 'TripActivitieType', svg?: string | null, title: string, titleFa?: string | null, id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null } | null } | null> } | null };

export type AllTripCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTripCategoriesQuery = { __typename?: 'Query', allTripCategories?: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', id: string, title: string, image?: string | null } | null } | null> } | null };

export type TripSimpleFieldsFragment = { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, defaultImage: string, viewsCount: number, published: boolean, userLiked?: boolean | null, likes: number, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null };

export type AllActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActivitiesQuery = { __typename?: 'Query', allActivities?: { __typename?: 'TripActivitieTypeConnection', edges: Array<{ __typename?: 'TripActivitieTypeEdge', node?: { __typename?: 'TripActivitieType', id: string, svg?: string | null, title: string, titleFa?: string | null, description?: string | null } | null } | null> } | null };

export type TripDetailLikesQueryVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type TripDetailLikesQuery = { __typename?: 'Query', trip?: { __typename?: 'TripType', likes: number, userLiked?: boolean | null } | null };

export type TripDetailQueryVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type TripDetailQuery = { __typename?: 'Query', trip?: { __typename?: 'TripType', userLiked?: boolean | null, userSaved?: boolean | null, id: string, tripMap?: any | null, gpsTrack?: any | null, costs?: any | null, checkList?: any | null, todoList?: any | null, published: boolean, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, likes: number, defaultImage: string, viewsCount: number, activities: { __typename?: 'TripActivitieTypeConnection', edges: Array<{ __typename?: 'TripActivitieTypeEdge', node?: { __typename?: 'TripActivitieType', svg?: string | null, title: string, titleFa?: string | null, id: string } | null } | null> }, accessories: { __typename?: 'AccessoryTypeConnection', edges: Array<{ __typename?: 'AccessoryTypeEdge', node?: { __typename?: 'AccessoryType', id: string, likesCount: number, image?: string | null, imageLink?: string | null, name: string, brand?: { __typename?: 'AccessoryBrandType', logo: string, name: string } | null } | null } | null> }, companions: { __typename?: 'UserTypeConnection', edges: Array<{ __typename?: 'UserTypeEdge', node?: { __typename?: 'UserType', id: string, username: string, avatar: string } | null } | null> }, images: { __typename?: 'TripImageTypeConnection', edges: Array<{ __typename?: 'TripImageTypeEdge', node?: { __typename?: 'TripImageType', id: string, image: string, description?: string | null, copyrightName?: string | null } | null } | null> }, videos: { __typename?: 'TripVideoTypeConnection', edges: Array<{ __typename?: 'TripVideoTypeEdge', node?: { __typename?: 'TripVideoType', video: string, description?: string | null, copyrightName?: string | null } | null } | null> }, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string, title: string, description?: string | null, latitude?: string | null, longitude?: string | null, activities: { __typename?: 'TripActivitieTypeConnection', edges: Array<{ __typename?: 'TripActivitieTypeEdge', node?: { __typename?: 'TripActivitieType', id: string, title: string, titleFa?: string | null, svg?: string | null } | null } | null> }, images: { __typename?: 'ExperienceImageTypeConnection', edges: Array<{ __typename?: 'ExperienceImageTypeEdge', node?: { __typename?: 'ExperienceImageType', id: string, latitude?: string | null, longitude?: string | null, description?: string | null, image: string, copyrightName?: string | null } | null } | null> } } | null } | null> } | null, residencesOfTrip: { __typename?: 'ResidenceTypeConnection', edges: Array<{ __typename?: 'ResidenceTypeEdge', node?: { __typename?: 'ResidenceType', id: string, stayDuration: number, name: string, latitude?: string | null, longitude?: string | null, residenceType: { __typename?: 'ResidenceTypeType', id: string, name: string, svg: string } } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string, name: string, longitude?: any | null, latitude?: any | null } | null } | null> }, transfers: { __typename?: 'TransferTypeConnection', edges: Array<{ __typename?: 'TransferTypeEdge', node?: { __typename?: 'TransferType', id: string, duration?: number | null, startTime?: any | null, src: { __typename?: 'CityType', name: string, latitude: any, longitude: any, id: string }, destination: { __typename?: 'CityType', name: string, latitude: any, longitude: any, id: string }, transferType?: { __typename?: 'TransferTypeType', id: string, title: string, svg?: string | null } | null } | null } | null> }, country: { __typename?: 'CountryType', id: string, name: string }, province: { __typename?: 'ProvinceType', id: string, name: string, longitude: any, latitude: any }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', id: string, title: string } | null } | null> } } | null };

export type TripReviewsQueryVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type TripReviewsQuery = { __typename?: 'Query', trip?: { __typename?: 'TripType', reviewsOfTrip: { __typename?: 'TripReviewTypeConnection', edges: Array<{ __typename?: 'TripReviewTypeEdge', node?: { __typename?: 'TripReviewType', likesCount: number, dislikesCount: number, description: string, createdAt: any, id: string, userLiked?: string | null, author: { __typename?: 'UserType', id: string, username: string, avatar: string } } | null } | null> } } | null };

export type AllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountriesQuery = { __typename?: 'Query', allCountries?: { __typename?: 'CountryTypeConnection', edges: Array<{ __typename?: 'CountryTypeEdge', node?: { __typename?: 'CountryType', name: string, id: string } | null } | null> } | null };

export type AllProvincesOfCountryQueryVariables = Exact<{
  allProvincesCountry?: InputMaybe<Scalars['ID']>;
}>;


export type AllProvincesOfCountryQuery = { __typename?: 'Query', allProvinces?: { __typename?: 'ProvinceTypeConnection', edges: Array<{ __typename?: 'ProvinceTypeEdge', node?: { __typename?: 'ProvinceType', id: string, name: string } | null } | null> } | null };

export type AllCitiesOfProvinceQueryVariables = Exact<{
  province: Scalars['ID'];
}>;


export type AllCitiesOfProvinceQuery = { __typename?: 'Query', allCities?: { __typename?: 'CityTypeConnection', edges: Array<{ __typename?: 'CityTypeEdge', node?: { __typename?: 'CityType', id: string, name: string } | null } | null> } | null };

export type TripReviewLikeStatusQueryVariables = Exact<{
  tripReviewId: Scalars['ID'];
}>;


export type TripReviewLikeStatusQuery = { __typename?: 'Query', tripReview?: { __typename?: 'TripReviewType', userLiked?: string | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', id: string, username: string, avatar: string } | null };

export type MeTourLeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type MeTourLeaderQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', tourleader?: { __typename?: 'TourLeaderType', id: string, name: string, tourLeadingId: string, successfulToursCount: number } | null } | null };

export type MeDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type MeDetailQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', id: string, username: string, avatar: string, email?: string | null, dateJoined: any, profilemodel?: { __typename?: 'ProfileType', about?: string | null, tripStatus?: boolean | null, header?: string | null, gender?: ProfileModelGender | null, followersCount: number, followingsCount: number } | null, trips: { __typename?: 'TripTypeConnection', edges: Array<{ __typename?: 'TripTypeEdge', node?: { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, defaultImage: string, viewsCount: number, published: boolean, userLiked?: boolean | null, likes: number, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null } | null } | null> } } | null };

export type UserDetailQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserDetailQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', id: string, username: string, avatar: string, email?: string | null, dateJoined: any, profilemodel?: { __typename?: 'ProfileType', about?: string | null, tripStatus?: boolean | null, header?: string | null, gender?: ProfileModelGender | null, followersCount: number, followingsCount: number } | null, trips: { __typename?: 'TripTypeConnection', edges: Array<{ __typename?: 'TripTypeEdge', node?: { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, defaultImage: string, viewsCount: number, published: boolean, userLiked?: boolean | null, likes: number, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null } | null } | null> } } | null };

export type IsFollowedQueryVariables = Exact<{
  followedUsername: Scalars['String'];
}>;


export type IsFollowedQuery = { __typename?: 'Query', followedUser?: boolean | null };

export type TourLeaderDetailQueryVariables = Exact<{
  username: Scalars['String'];
  followedUsername: Scalars['String'];
}>;


export type TourLeaderDetailQuery = { __typename?: 'Query', followedUser?: boolean | null, user?: { __typename?: 'UserType', tourleader?: { __typename?: 'TourLeaderType', id: string, name: string, tourLeadingId: string, successfulToursCount: number } | null } | null };

export type UserFollowingsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserFollowingsQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', followingUsers: { __typename?: 'FollowingTypeConnection', edges: Array<{ __typename?: 'FollowingTypeEdge', node?: { __typename?: 'FollowingType', followed: { __typename?: 'UserType', username: string, avatar: string, id: string } } | null } | null> } } | null };

export type UserFollowersQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserFollowersQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', followerUsers: { __typename?: 'FollowingTypeConnection', edges: Array<{ __typename?: 'FollowingTypeEdge', node?: { __typename?: 'FollowingType', follower: { __typename?: 'UserType', id: string, username: string, avatar: string } } | null } | null> } } | null };

export type MeFollowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type MeFollowingsQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', followingUsers: { __typename?: 'FollowingTypeConnection', edges: Array<{ __typename?: 'FollowingTypeEdge', node?: { __typename?: 'FollowingType', followed: { __typename?: 'UserType', id: string, username: string, avatar: string } } | null } | null> } } | null };

export type MeFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type MeFollowersQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', followerUsers: { __typename?: 'FollowingTypeConnection', edges: Array<{ __typename?: 'FollowingTypeEdge', node?: { __typename?: 'FollowingType', follower: { __typename?: 'UserType', id: string, username: string, avatar: string } } | null } | null> } } | null };

export type AllProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProfilesQuery = { __typename?: 'Query', allUsers?: { __typename?: 'UserTypeConnection', edges: Array<{ __typename?: 'UserTypeEdge', node?: { __typename?: 'UserType', id: string, username: string, avatar: string, trips: { __typename?: 'TripTypeConnection', edges: Array<{ __typename?: 'TripTypeEdge', node?: { __typename?: 'TripType', id: string } | null } | null> }, profilemodel?: { __typename?: 'ProfileType', tripStatus?: boolean | null, header?: string | null, about?: string | null, followersCount: number, followingsCount: number, achievements: { __typename?: 'AchivmentTypeConnection', edges: Array<{ __typename?: 'AchivmentTypeEdge', node?: { __typename?: 'AchivmentType', title: string, image: string } | null } | null> } } | null } | null } | null> } | null };

export type MeSavedTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type MeSavedTripsQuery = { __typename?: 'Query', myTripCollection?: { __typename?: 'TripCollectionsTypeConnection', edges: Array<{ __typename?: 'TripCollectionsTypeEdge', node?: { __typename?: 'TripCollectionsType', trip: { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, defaultImage: string, viewsCount: number, published: boolean, userLiked?: boolean | null, likes: number, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null } } | null } | null> } | null };

export type MyTripsQueryVariables = Exact<{
  published?: InputMaybe<Scalars['Boolean']>;
}>;


export type MyTripsQuery = { __typename?: 'Query', allMyTrip?: { __typename?: 'TripTypeConnection', edges: Array<{ __typename?: 'TripTypeEdge', node?: { __typename?: 'TripType', id: string, title: string, description?: string | null, createdAt: any, startDate?: any | null, endDate?: any | null, defaultImage: string, viewsCount: number, published: boolean, userLiked?: boolean | null, likes: number, author: { __typename?: 'UserType', id: string, username: string, avatar: string }, country: { __typename?: 'CountryType', name: string }, province: { __typename?: 'ProvinceType', name: string }, categories: { __typename?: 'TripCategoryTypeConnection', edges: Array<{ __typename?: 'TripCategoryTypeEdge', node?: { __typename?: 'TripCategoryType', title: string } | null } | null> }, places: { __typename?: 'PlaceTypeConnection', edges: Array<{ __typename?: 'PlaceTypeEdge', node?: { __typename?: 'PlaceType', id: string } | null } | null> }, experiences?: { __typename?: 'ExperienceTypeConnection', edges: Array<{ __typename?: 'ExperienceTypeEdge', node?: { __typename?: 'ExperienceType', id: string } | null } | null> } | null } | null } | null> } | null };

export type UserFieldsFragment = { __typename?: 'UserType', id: string, username: string, avatar: string, email?: string | null, dateJoined: any };

export type ProfileFieldsFragment = { __typename?: 'ProfileType', about?: string | null, tripStatus?: boolean | null, header?: string | null, gender?: ProfileModelGender | null, followersCount: number, followingsCount: number };

export type DeleteTripMutationVariables = Exact<{
  deleteTripTripId: Scalars['ID'];
}>;


export type DeleteTripMutation = { __typename?: 'Mutation', deleteTrip?: { __typename?: 'DeleteTrip', deleted?: boolean | null } | null };

export type PublisTripMutationVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type PublisTripMutation = { __typename?: 'Mutation', publishTrip?: { __typename?: 'PublishTripMutation', success?: boolean | null, trip?: { __typename?: 'TripType', published: boolean } | null } | null };

export type UnPublisTripMutationVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type UnPublisTripMutation = { __typename?: 'Mutation', undoPublishTrip?: { __typename?: 'UnPublishTripMutation', success?: boolean | null, trip?: { __typename?: 'TripType', published: boolean } | null } | null };

export type SearchUsernameQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type SearchUsernameQuery = { __typename?: 'Query', allUsers?: { __typename?: 'UserTypeConnection', edges: Array<{ __typename?: 'UserTypeEdge', node?: { __typename?: 'UserType', username: string, id: string, avatar: string } | null } | null> } | null };

export const TripSimpleFieldsFragmentDoc = gql`
    fragment TripSimpleFields on TripType {
  id
  title
  description
  createdAt
  startDate
  endDate
  defaultImage
  viewsCount
  author {
    id
    username
    avatar
  }
  country {
    name
  }
  published
  province {
    name
  }
  userLiked
  categories {
    edges {
      node {
        title
      }
    }
  }
  likes
  places {
    edges {
      node {
        id
      }
    }
  }
  experiences {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on UserType {
  id
  username
  avatar
  email
  dateJoined
}
    `;
export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on ProfileType {
  about
  tripStatus
  header
  gender
  followersCount
  followingsCount
}
    `;
export const VerifySmsDocument = gql`
    mutation VerifySms($verifySmsCode: String!, $verifySmsPhoneNumber: String!) {
  verifySms(code: $verifySmsCode, phoneNumber: $verifySmsPhoneNumber) {
    success
  }
}
    `;
export type VerifySmsMutationFn = Apollo.MutationFunction<VerifySmsMutation, VerifySmsMutationVariables>;

/**
 * __useVerifySmsMutation__
 *
 * To run a mutation, you first call `useVerifySmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifySmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifySmsMutation, { data, loading, error }] = useVerifySmsMutation({
 *   variables: {
 *      verifySmsCode: // value for 'verifySmsCode'
 *      verifySmsPhoneNumber: // value for 'verifySmsPhoneNumber'
 *   },
 * });
 */
export function useVerifySmsMutation(baseOptions?: Apollo.MutationHookOptions<VerifySmsMutation, VerifySmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifySmsMutation, VerifySmsMutationVariables>(VerifySmsDocument, options);
      }
export type VerifySmsMutationHookResult = ReturnType<typeof useVerifySmsMutation>;
export type VerifySmsMutationResult = Apollo.MutationResult<VerifySmsMutation>;
export type VerifySmsMutationOptions = Apollo.BaseMutationOptions<VerifySmsMutation, VerifySmsMutationVariables>;
export const RegisterSmsDocument = gql`
    mutation RegisterSms($registerSmsPassword1: String!, $registerSmsPassword2: String!, $registerSmsPhoneNumber: String!, $registerSmsUsername: String) {
  registerSms(
    password1: $registerSmsPassword1
    password2: $registerSmsPassword2
    phoneNumber: $registerSmsPhoneNumber
    username: $registerSmsUsername
  ) {
    success
  }
}
    `;
export type RegisterSmsMutationFn = Apollo.MutationFunction<RegisterSmsMutation, RegisterSmsMutationVariables>;

/**
 * __useRegisterSmsMutation__
 *
 * To run a mutation, you first call `useRegisterSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSmsMutation, { data, loading, error }] = useRegisterSmsMutation({
 *   variables: {
 *      registerSmsPassword1: // value for 'registerSmsPassword1'
 *      registerSmsPassword2: // value for 'registerSmsPassword2'
 *      registerSmsPhoneNumber: // value for 'registerSmsPhoneNumber'
 *      registerSmsUsername: // value for 'registerSmsUsername'
 *   },
 * });
 */
export function useRegisterSmsMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSmsMutation, RegisterSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterSmsMutation, RegisterSmsMutationVariables>(RegisterSmsDocument, options);
      }
export type RegisterSmsMutationHookResult = ReturnType<typeof useRegisterSmsMutation>;
export type RegisterSmsMutationResult = Apollo.MutationResult<RegisterSmsMutation>;
export type RegisterSmsMutationOptions = Apollo.BaseMutationOptions<RegisterSmsMutation, RegisterSmsMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($refreshTokenRefreshToken: String!) {
  refreshToken(refreshToken: $refreshTokenRefreshToken) {
    token
    payload
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refreshTokenRefreshToken: // value for 'refreshTokenRefreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const ResetPasswordSmsDocument = gql`
    mutation ResetPasswordSms($resetPasswordSmsCode: String!, $resetPasswordSmsNewPassword1: String!, $resetPasswordSmsNewPassword2: String!, $resetPasswordSmsPhoneNumber: String!) {
  resetPasswordSms(
    code: $resetPasswordSmsCode
    newPassword1: $resetPasswordSmsNewPassword1
    newPassword2: $resetPasswordSmsNewPassword2
    phoneNumber: $resetPasswordSmsPhoneNumber
  ) {
    success
  }
}
    `;
export type ResetPasswordSmsMutationFn = Apollo.MutationFunction<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>;

/**
 * __useResetPasswordSmsMutation__
 *
 * To run a mutation, you first call `useResetPasswordSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordSmsMutation, { data, loading, error }] = useResetPasswordSmsMutation({
 *   variables: {
 *      resetPasswordSmsCode: // value for 'resetPasswordSmsCode'
 *      resetPasswordSmsNewPassword1: // value for 'resetPasswordSmsNewPassword1'
 *      resetPasswordSmsNewPassword2: // value for 'resetPasswordSmsNewPassword2'
 *      resetPasswordSmsPhoneNumber: // value for 'resetPasswordSmsPhoneNumber'
 *   },
 * });
 */
export function useResetPasswordSmsMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>(ResetPasswordSmsDocument, options);
      }
export type ResetPasswordSmsMutationHookResult = ReturnType<typeof useResetPasswordSmsMutation>;
export type ResetPasswordSmsMutationResult = Apollo.MutationResult<ResetPasswordSmsMutation>;
export type ResetPasswordSmsMutationOptions = Apollo.BaseMutationOptions<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>;
export const ForgotPasswordSmsDocument = gql`
    mutation ForgotPasswordSms($forgotPasswordSmsPhoneNumber: String!) {
  forgotPasswordSms(phoneNumber: $forgotPasswordSmsPhoneNumber) {
    success
  }
}
    `;
export type ForgotPasswordSmsMutationFn = Apollo.MutationFunction<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>;

/**
 * __useForgotPasswordSmsMutation__
 *
 * To run a mutation, you first call `useForgotPasswordSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordSmsMutation, { data, loading, error }] = useForgotPasswordSmsMutation({
 *   variables: {
 *      forgotPasswordSmsPhoneNumber: // value for 'forgotPasswordSmsPhoneNumber'
 *   },
 * });
 */
export function useForgotPasswordSmsMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>(ForgotPasswordSmsDocument, options);
      }
export type ForgotPasswordSmsMutationHookResult = ReturnType<typeof useForgotPasswordSmsMutation>;
export type ForgotPasswordSmsMutationResult = Apollo.MutationResult<ForgotPasswordSmsMutation>;
export type ForgotPasswordSmsMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>;
export const TokenAuthDocument = gql`
    mutation TokenAuth($tokenAuthPassword: String!, $tokenAuthPhoneNumber: String, $tokenAuthEmail: String, $tokenAuthUsername: String) {
  tokenAuth(
    password: $tokenAuthPassword
    phoneNumber: $tokenAuthPhoneNumber
    email: $tokenAuthEmail
    username: $tokenAuthUsername
  ) {
    token
    success
    refreshToken
  }
}
    `;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      tokenAuthPassword: // value for 'tokenAuthPassword'
 *      tokenAuthPhoneNumber: // value for 'tokenAuthPhoneNumber'
 *      tokenAuthEmail: // value for 'tokenAuthEmail'
 *      tokenAuthUsername: // value for 'tokenAuthUsername'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const ResendVerificationSmsDocument = gql`
    mutation ResendVerificationSms($resendVerificationSmsPhoneNumber: String!) {
  resendVerificationSms(phoneNumber: $resendVerificationSmsPhoneNumber) {
    success
  }
}
    `;
export type ResendVerificationSmsMutationFn = Apollo.MutationFunction<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>;

/**
 * __useResendVerificationSmsMutation__
 *
 * To run a mutation, you first call `useResendVerificationSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationSmsMutation, { data, loading, error }] = useResendVerificationSmsMutation({
 *   variables: {
 *      resendVerificationSmsPhoneNumber: // value for 'resendVerificationSmsPhoneNumber'
 *   },
 * });
 */
export function useResendVerificationSmsMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>(ResendVerificationSmsDocument, options);
      }
export type ResendVerificationSmsMutationHookResult = ReturnType<typeof useResendVerificationSmsMutation>;
export type ResendVerificationSmsMutationResult = Apollo.MutationResult<ResendVerificationSmsMutation>;
export type ResendVerificationSmsMutationOptions = Apollo.BaseMutationOptions<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>;
export const PasswordChangeDocument = gql`
    mutation PasswordChange($passwordChangeOldPassword: String!, $passwordChangeNewPassword1: String!, $passwordChangeNewPassword2: String!) {
  passwordChange(
    oldPassword: $passwordChangeOldPassword
    newPassword1: $passwordChangeNewPassword1
    newPassword2: $passwordChangeNewPassword2
  ) {
    success
  }
}
    `;
export type PasswordChangeMutationFn = Apollo.MutationFunction<PasswordChangeMutation, PasswordChangeMutationVariables>;

/**
 * __usePasswordChangeMutation__
 *
 * To run a mutation, you first call `usePasswordChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordChangeMutation, { data, loading, error }] = usePasswordChangeMutation({
 *   variables: {
 *      passwordChangeOldPassword: // value for 'passwordChangeOldPassword'
 *      passwordChangeNewPassword1: // value for 'passwordChangeNewPassword1'
 *      passwordChangeNewPassword2: // value for 'passwordChangeNewPassword2'
 *   },
 * });
 */
export function usePasswordChangeMutation(baseOptions?: Apollo.MutationHookOptions<PasswordChangeMutation, PasswordChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PasswordChangeMutation, PasswordChangeMutationVariables>(PasswordChangeDocument, options);
      }
export type PasswordChangeMutationHookResult = ReturnType<typeof usePasswordChangeMutation>;
export type PasswordChangeMutationResult = Apollo.MutationResult<PasswordChangeMutation>;
export type PasswordChangeMutationOptions = Apollo.BaseMutationOptions<PasswordChangeMutation, PasswordChangeMutationVariables>;
export const UsernameChangeDocument = gql`
    mutation UsernameChange($username: String!) {
  changeUsername(username: $username) {
    success
  }
}
    `;
export type UsernameChangeMutationFn = Apollo.MutationFunction<UsernameChangeMutation, UsernameChangeMutationVariables>;

/**
 * __useUsernameChangeMutation__
 *
 * To run a mutation, you first call `useUsernameChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsernameChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usernameChangeMutation, { data, loading, error }] = useUsernameChangeMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsernameChangeMutation(baseOptions?: Apollo.MutationHookOptions<UsernameChangeMutation, UsernameChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UsernameChangeMutation, UsernameChangeMutationVariables>(UsernameChangeDocument, options);
      }
export type UsernameChangeMutationHookResult = ReturnType<typeof useUsernameChangeMutation>;
export type UsernameChangeMutationResult = Apollo.MutationResult<UsernameChangeMutation>;
export type UsernameChangeMutationOptions = Apollo.BaseMutationOptions<UsernameChangeMutation, UsernameChangeMutationVariables>;
export const CreateSinglTransferDocument = gql`
    mutation CreateSinglTransfer($src: ID!, $destination: ID!, $transferInput: TransferInput, $transferType: ID!) {
  createTransfer(
    src: $src
    destination: $destination
    transferInput: $transferInput
    transferType: $transferType
  ) {
    success
    transfer {
      id
      duration
      src {
        name
        latitude
        longitude
        id
      }
      destination {
        name
        latitude
        longitude
        id
      }
      startTime
      transferType {
        id
        title
        svg
      }
    }
  }
}
    `;
export type CreateSinglTransferMutationFn = Apollo.MutationFunction<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>;

/**
 * __useCreateSinglTransferMutation__
 *
 * To run a mutation, you first call `useCreateSinglTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSinglTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSinglTransferMutation, { data, loading, error }] = useCreateSinglTransferMutation({
 *   variables: {
 *      src: // value for 'src'
 *      destination: // value for 'destination'
 *      transferInput: // value for 'transferInput'
 *      transferType: // value for 'transferType'
 *   },
 * });
 */
export function useCreateSinglTransferMutation(baseOptions?: Apollo.MutationHookOptions<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>(CreateSinglTransferDocument, options);
      }
export type CreateSinglTransferMutationHookResult = ReturnType<typeof useCreateSinglTransferMutation>;
export type CreateSinglTransferMutationResult = Apollo.MutationResult<CreateSinglTransferMutation>;
export type CreateSinglTransferMutationOptions = Apollo.BaseMutationOptions<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>;
export const DeleteSingleTransferDocument = gql`
    mutation DeleteSingleTransfer($id: ID!) {
  deleteTransfer(transferId: $id) {
    success
  }
}
    `;
export type DeleteSingleTransferMutationFn = Apollo.MutationFunction<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>;

/**
 * __useDeleteSingleTransferMutation__
 *
 * To run a mutation, you first call `useDeleteSingleTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSingleTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSingleTransferMutation, { data, loading, error }] = useDeleteSingleTransferMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSingleTransferMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>(DeleteSingleTransferDocument, options);
      }
export type DeleteSingleTransferMutationHookResult = ReturnType<typeof useDeleteSingleTransferMutation>;
export type DeleteSingleTransferMutationResult = Apollo.MutationResult<DeleteSingleTransferMutation>;
export type DeleteSingleTransferMutationOptions = Apollo.BaseMutationOptions<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>;
export const LikeTripDocument = gql`
    mutation LikeTrip($createTripLikeTripId: ID!) {
  createTripLike(tripId: $createTripLikeTripId) {
    success
    like
    trip {
      id
      likes
      userLiked
    }
  }
}
    `;
export type LikeTripMutationFn = Apollo.MutationFunction<LikeTripMutation, LikeTripMutationVariables>;

/**
 * __useLikeTripMutation__
 *
 * To run a mutation, you first call `useLikeTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeTripMutation, { data, loading, error }] = useLikeTripMutation({
 *   variables: {
 *      createTripLikeTripId: // value for 'createTripLikeTripId'
 *   },
 * });
 */
export function useLikeTripMutation(baseOptions?: Apollo.MutationHookOptions<LikeTripMutation, LikeTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeTripMutation, LikeTripMutationVariables>(LikeTripDocument, options);
      }
export type LikeTripMutationHookResult = ReturnType<typeof useLikeTripMutation>;
export type LikeTripMutationResult = Apollo.MutationResult<LikeTripMutation>;
export type LikeTripMutationOptions = Apollo.BaseMutationOptions<LikeTripMutation, LikeTripMutationVariables>;
export const CreateTripReviewDocument = gql`
    mutation CreateTripReview($createTripReviewInput: CreateTripReviewInput!) {
  createTripReview(input: $createTripReviewInput) {
    success
  }
}
    `;
export type CreateTripReviewMutationFn = Apollo.MutationFunction<CreateTripReviewMutation, CreateTripReviewMutationVariables>;

/**
 * __useCreateTripReviewMutation__
 *
 * To run a mutation, you first call `useCreateTripReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTripReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTripReviewMutation, { data, loading, error }] = useCreateTripReviewMutation({
 *   variables: {
 *      createTripReviewInput: // value for 'createTripReviewInput'
 *   },
 * });
 */
export function useCreateTripReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateTripReviewMutation, CreateTripReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTripReviewMutation, CreateTripReviewMutationVariables>(CreateTripReviewDocument, options);
      }
export type CreateTripReviewMutationHookResult = ReturnType<typeof useCreateTripReviewMutation>;
export type CreateTripReviewMutationResult = Apollo.MutationResult<CreateTripReviewMutation>;
export type CreateTripReviewMutationOptions = Apollo.BaseMutationOptions<CreateTripReviewMutation, CreateTripReviewMutationVariables>;
export const CreateInitialTripDocument = gql`
    mutation CreateInitialTrip($createTripTripInput: TripInput!, $createTripTripRelatedInput: TripRelatedInput!, $createTripProvince: ID!, $createTripCountry: ID!, $startDate: Date, $endDate: Date) {
  createTrip(
    tripInput: $createTripTripInput
    tripRelatedInput: $createTripTripRelatedInput
    province: $createTripProvince
    country: $createTripCountry
  ) {
    trip {
      id
    }
    success
  }
}
    `;
export type CreateInitialTripMutationFn = Apollo.MutationFunction<CreateInitialTripMutation, CreateInitialTripMutationVariables>;

/**
 * __useCreateInitialTripMutation__
 *
 * To run a mutation, you first call `useCreateInitialTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInitialTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInitialTripMutation, { data, loading, error }] = useCreateInitialTripMutation({
 *   variables: {
 *      createTripTripInput: // value for 'createTripTripInput'
 *      createTripTripRelatedInput: // value for 'createTripTripRelatedInput'
 *      createTripProvince: // value for 'createTripProvince'
 *      createTripCountry: // value for 'createTripCountry'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useCreateInitialTripMutation(baseOptions?: Apollo.MutationHookOptions<CreateInitialTripMutation, CreateInitialTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInitialTripMutation, CreateInitialTripMutationVariables>(CreateInitialTripDocument, options);
      }
export type CreateInitialTripMutationHookResult = ReturnType<typeof useCreateInitialTripMutation>;
export type CreateInitialTripMutationResult = Apollo.MutationResult<CreateInitialTripMutation>;
export type CreateInitialTripMutationOptions = Apollo.BaseMutationOptions<CreateInitialTripMutation, CreateInitialTripMutationVariables>;
export const UpdateTripDocument = gql`
    mutation UpdateTrip($tripData: UpdateTripInput, $tripId: ID!, $removeTripRelatedData: TripRelatedInput, $tripRelatedData: TripRelatedInput, $province: ID, $country: ID) {
  updateTrip(
    tripData: $tripData
    tripId: $tripId
    tripRelatedData: $tripRelatedData
    removeTripRelatedData: $removeTripRelatedData
    province: $province
    country: $country
  ) {
    trip {
      id
    }
    success
  }
}
    `;
export type UpdateTripMutationFn = Apollo.MutationFunction<UpdateTripMutation, UpdateTripMutationVariables>;

/**
 * __useUpdateTripMutation__
 *
 * To run a mutation, you first call `useUpdateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTripMutation, { data, loading, error }] = useUpdateTripMutation({
 *   variables: {
 *      tripData: // value for 'tripData'
 *      tripId: // value for 'tripId'
 *      removeTripRelatedData: // value for 'removeTripRelatedData'
 *      tripRelatedData: // value for 'tripRelatedData'
 *      province: // value for 'province'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useUpdateTripMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTripMutation, UpdateTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTripMutation, UpdateTripMutationVariables>(UpdateTripDocument, options);
      }
export type UpdateTripMutationHookResult = ReturnType<typeof useUpdateTripMutation>;
export type UpdateTripMutationResult = Apollo.MutationResult<UpdateTripMutation>;
export type UpdateTripMutationOptions = Apollo.BaseMutationOptions<UpdateTripMutation, UpdateTripMutationVariables>;
export const LikeTripReviewMutationDocument = gql`
    mutation LikeTripReviewMutation($likeTripReviewReview: ID!) {
  likeTripReview(review: $likeTripReviewReview) {
    tripReviewLike {
      value
      review {
        likesCount
        dislikesCount
      }
    }
  }
}
    `;
export type LikeTripReviewMutationMutationFn = Apollo.MutationFunction<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>;

/**
 * __useLikeTripReviewMutationMutation__
 *
 * To run a mutation, you first call `useLikeTripReviewMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeTripReviewMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeTripReviewMutationMutation, { data, loading, error }] = useLikeTripReviewMutationMutation({
 *   variables: {
 *      likeTripReviewReview: // value for 'likeTripReviewReview'
 *   },
 * });
 */
export function useLikeTripReviewMutationMutation(baseOptions?: Apollo.MutationHookOptions<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>(LikeTripReviewMutationDocument, options);
      }
export type LikeTripReviewMutationMutationHookResult = ReturnType<typeof useLikeTripReviewMutationMutation>;
export type LikeTripReviewMutationMutationResult = Apollo.MutationResult<LikeTripReviewMutationMutation>;
export type LikeTripReviewMutationMutationOptions = Apollo.BaseMutationOptions<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>;
export const DislikeTripReviewMutationDocument = gql`
    mutation DislikeTripReviewMutation($dislikeTripReviewReview: ID!) {
  dislikeTripReview(review: $dislikeTripReviewReview) {
    tripReviewLike {
      value
      review {
        dislikesCount
        likesCount
      }
    }
  }
}
    `;
export type DislikeTripReviewMutationMutationFn = Apollo.MutationFunction<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>;

/**
 * __useDislikeTripReviewMutationMutation__
 *
 * To run a mutation, you first call `useDislikeTripReviewMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDislikeTripReviewMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dislikeTripReviewMutationMutation, { data, loading, error }] = useDislikeTripReviewMutationMutation({
 *   variables: {
 *      dislikeTripReviewReview: // value for 'dislikeTripReviewReview'
 *   },
 * });
 */
export function useDislikeTripReviewMutationMutation(baseOptions?: Apollo.MutationHookOptions<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>(DislikeTripReviewMutationDocument, options);
      }
export type DislikeTripReviewMutationMutationHookResult = ReturnType<typeof useDislikeTripReviewMutationMutation>;
export type DislikeTripReviewMutationMutationResult = Apollo.MutationResult<DislikeTripReviewMutationMutation>;
export type DislikeTripReviewMutationMutationOptions = Apollo.BaseMutationOptions<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>;
export const SaveTripMutationDocument = gql`
    mutation SaveTripMutation($saveTripTrip: ID) {
  saveTrip(trip: $saveTripTrip) {
    tripCollection {
      trip {
        userSaved
      }
    }
    success
  }
}
    `;
export type SaveTripMutationMutationFn = Apollo.MutationFunction<SaveTripMutationMutation, SaveTripMutationMutationVariables>;

/**
 * __useSaveTripMutationMutation__
 *
 * To run a mutation, you first call `useSaveTripMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTripMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTripMutationMutation, { data, loading, error }] = useSaveTripMutationMutation({
 *   variables: {
 *      saveTripTrip: // value for 'saveTripTrip'
 *   },
 * });
 */
export function useSaveTripMutationMutation(baseOptions?: Apollo.MutationHookOptions<SaveTripMutationMutation, SaveTripMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTripMutationMutation, SaveTripMutationMutationVariables>(SaveTripMutationDocument, options);
      }
export type SaveTripMutationMutationHookResult = ReturnType<typeof useSaveTripMutationMutation>;
export type SaveTripMutationMutationResult = Apollo.MutationResult<SaveTripMutationMutation>;
export type SaveTripMutationMutationOptions = Apollo.BaseMutationOptions<SaveTripMutationMutation, SaveTripMutationMutationVariables>;
export const CreateExperienceImageDocument = gql`
    mutation CreateExperienceImage($imageList: [ExperienceImageInputType]!) {
  createExperienceImages(imageList: $imageList) {
    success
    images {
      id
      image
    }
  }
}
    `;
export type CreateExperienceImageMutationFn = Apollo.MutationFunction<CreateExperienceImageMutation, CreateExperienceImageMutationVariables>;

/**
 * __useCreateExperienceImageMutation__
 *
 * To run a mutation, you first call `useCreateExperienceImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExperienceImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExperienceImageMutation, { data, loading, error }] = useCreateExperienceImageMutation({
 *   variables: {
 *      imageList: // value for 'imageList'
 *   },
 * });
 */
export function useCreateExperienceImageMutation(baseOptions?: Apollo.MutationHookOptions<CreateExperienceImageMutation, CreateExperienceImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExperienceImageMutation, CreateExperienceImageMutationVariables>(CreateExperienceImageDocument, options);
      }
export type CreateExperienceImageMutationHookResult = ReturnType<typeof useCreateExperienceImageMutation>;
export type CreateExperienceImageMutationResult = Apollo.MutationResult<CreateExperienceImageMutation>;
export type CreateExperienceImageMutationOptions = Apollo.BaseMutationOptions<CreateExperienceImageMutation, CreateExperienceImageMutationVariables>;
export const CreateExperinceMutationDocument = gql`
    mutation CreateExperinceMutation($experienceInput: ExperienceInput!, $experienceRelatedInput: ExperienceRelatedInputs) {
  createExperience(
    experienceInput: $experienceInput
    experienceRelatedInput: $experienceRelatedInput
  ) {
    success
    experience {
      id
      description
      images {
        edges {
          node {
            id
            image
          }
        }
      }
      title
      activities {
        edges {
          node {
            id
            titleFa
            svg
          }
        }
      }
    }
  }
}
    `;
export type CreateExperinceMutationMutationFn = Apollo.MutationFunction<CreateExperinceMutationMutation, CreateExperinceMutationMutationVariables>;

/**
 * __useCreateExperinceMutationMutation__
 *
 * To run a mutation, you first call `useCreateExperinceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExperinceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExperinceMutationMutation, { data, loading, error }] = useCreateExperinceMutationMutation({
 *   variables: {
 *      experienceInput: // value for 'experienceInput'
 *      experienceRelatedInput: // value for 'experienceRelatedInput'
 *   },
 * });
 */
export function useCreateExperinceMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateExperinceMutationMutation, CreateExperinceMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExperinceMutationMutation, CreateExperinceMutationMutationVariables>(CreateExperinceMutationDocument, options);
      }
export type CreateExperinceMutationMutationHookResult = ReturnType<typeof useCreateExperinceMutationMutation>;
export type CreateExperinceMutationMutationResult = Apollo.MutationResult<CreateExperinceMutationMutation>;
export type CreateExperinceMutationMutationOptions = Apollo.BaseMutationOptions<CreateExperinceMutationMutation, CreateExperinceMutationMutationVariables>;
export const CreateResidenceDocument = gql`
    mutation CreateResidence($name: String!, $residenceType: ID!, $stayDuration: Int!, $tripId: ID!, $longitude: String, $latitude: String) {
  createResidence(
    name: $name
    residenceType: $residenceType
    stayDuration: $stayDuration
    tripId: $tripId
    longitude: $longitude
    latitude: $latitude
  ) {
    success
  }
}
    `;
export type CreateResidenceMutationFn = Apollo.MutationFunction<CreateResidenceMutation, CreateResidenceMutationVariables>;

/**
 * __useCreateResidenceMutation__
 *
 * To run a mutation, you first call `useCreateResidenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResidenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResidenceMutation, { data, loading, error }] = useCreateResidenceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      residenceType: // value for 'residenceType'
 *      stayDuration: // value for 'stayDuration'
 *      tripId: // value for 'tripId'
 *      longitude: // value for 'longitude'
 *      latitude: // value for 'latitude'
 *   },
 * });
 */
export function useCreateResidenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateResidenceMutation, CreateResidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateResidenceMutation, CreateResidenceMutationVariables>(CreateResidenceDocument, options);
      }
export type CreateResidenceMutationHookResult = ReturnType<typeof useCreateResidenceMutation>;
export type CreateResidenceMutationResult = Apollo.MutationResult<CreateResidenceMutation>;
export type CreateResidenceMutationOptions = Apollo.BaseMutationOptions<CreateResidenceMutation, CreateResidenceMutationVariables>;
export const DeleteResidenceDocument = gql`
    mutation DeleteResidence($residenceId: ID!, $tripId: ID!) {
  deleteResidence(residenceId: $residenceId, tripId: $tripId) {
    success
  }
}
    `;
export type DeleteResidenceMutationFn = Apollo.MutationFunction<DeleteResidenceMutation, DeleteResidenceMutationVariables>;

/**
 * __useDeleteResidenceMutation__
 *
 * To run a mutation, you first call `useDeleteResidenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteResidenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteResidenceMutation, { data, loading, error }] = useDeleteResidenceMutation({
 *   variables: {
 *      residenceId: // value for 'residenceId'
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useDeleteResidenceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteResidenceMutation, DeleteResidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteResidenceMutation, DeleteResidenceMutationVariables>(DeleteResidenceDocument, options);
      }
export type DeleteResidenceMutationHookResult = ReturnType<typeof useDeleteResidenceMutation>;
export type DeleteResidenceMutationResult = Apollo.MutationResult<DeleteResidenceMutation>;
export type DeleteResidenceMutationOptions = Apollo.BaseMutationOptions<DeleteResidenceMutation, DeleteResidenceMutationVariables>;
export const UpdateResidenceDocument = gql`
    mutation UpdateResidence($residenceId: ID!, $tripId: ID!, $latitude: String, $longitude: String, $name: String, $residenceType: ID, $stayDuration: Int) {
  updateResidence(
    residenceId: $residenceId
    tripId: $tripId
    latitude: $latitude
    longitude: $longitude
    name: $name
    residenceType: $residenceType
    stayDuration: $stayDuration
  ) {
    success
  }
}
    `;
export type UpdateResidenceMutationFn = Apollo.MutationFunction<UpdateResidenceMutation, UpdateResidenceMutationVariables>;

/**
 * __useUpdateResidenceMutation__
 *
 * To run a mutation, you first call `useUpdateResidenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResidenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResidenceMutation, { data, loading, error }] = useUpdateResidenceMutation({
 *   variables: {
 *      residenceId: // value for 'residenceId'
 *      tripId: // value for 'tripId'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      name: // value for 'name'
 *      residenceType: // value for 'residenceType'
 *      stayDuration: // value for 'stayDuration'
 *   },
 * });
 */
export function useUpdateResidenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateResidenceMutation, UpdateResidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateResidenceMutation, UpdateResidenceMutationVariables>(UpdateResidenceDocument, options);
      }
export type UpdateResidenceMutationHookResult = ReturnType<typeof useUpdateResidenceMutation>;
export type UpdateResidenceMutationResult = Apollo.MutationResult<UpdateResidenceMutation>;
export type UpdateResidenceMutationOptions = Apollo.BaseMutationOptions<UpdateResidenceMutation, UpdateResidenceMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($updateProfileInput: UpdateProfileInput!) {
  updateProfile(input: $updateProfileInput) {
    profile {
      user {
        id
      }
      about
      tripStatus
      header
    }
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      updateProfileInput: // value for 'updateProfileInput'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(input: $updateUserInput) {
    user {
      avatar
      username
      id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const FollowOrUnfollowDocument = gql`
    mutation FollowOrUnfollow($followOrUnfollowInput: FollowOrUnfollowInput!) {
  followOrUnfollow(input: $followOrUnfollowInput) {
    followStatus
  }
}
    `;
export type FollowOrUnfollowMutationFn = Apollo.MutationFunction<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>;

/**
 * __useFollowOrUnfollowMutation__
 *
 * To run a mutation, you first call `useFollowOrUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowOrUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followOrUnfollowMutation, { data, loading, error }] = useFollowOrUnfollowMutation({
 *   variables: {
 *      followOrUnfollowInput: // value for 'followOrUnfollowInput'
 *   },
 * });
 */
export function useFollowOrUnfollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>(FollowOrUnfollowDocument, options);
      }
export type FollowOrUnfollowMutationHookResult = ReturnType<typeof useFollowOrUnfollowMutation>;
export type FollowOrUnfollowMutationResult = Apollo.MutationResult<FollowOrUnfollowMutation>;
export type FollowOrUnfollowMutationOptions = Apollo.BaseMutationOptions<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>;
export const SearchAccessoryDocument = gql`
    query SearchAccessory($name: String, $id: String, $first: Int) {
  allAccessory(
    name_Icontains: $name
    referenceLinks_AccessoryIdInSite_Icontains: $id
    first: $first
  ) {
    edges {
      node {
        id
        name
        imageLink
        category {
          id
          title
        }
      }
    }
  }
}
    `;

/**
 * __useSearchAccessoryQuery__
 *
 * To run a query within a React component, call `useSearchAccessoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAccessoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAccessoryQuery({
 *   variables: {
 *      name: // value for 'name'
 *      id: // value for 'id'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSearchAccessoryQuery(baseOptions?: Apollo.QueryHookOptions<SearchAccessoryQuery, SearchAccessoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchAccessoryQuery, SearchAccessoryQueryVariables>(SearchAccessoryDocument, options);
      }
export function useSearchAccessoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchAccessoryQuery, SearchAccessoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchAccessoryQuery, SearchAccessoryQueryVariables>(SearchAccessoryDocument, options);
        }
export type SearchAccessoryQueryHookResult = ReturnType<typeof useSearchAccessoryQuery>;
export type SearchAccessoryLazyQueryHookResult = ReturnType<typeof useSearchAccessoryLazyQuery>;
export type SearchAccessoryQueryResult = Apollo.QueryResult<SearchAccessoryQuery, SearchAccessoryQueryVariables>;
export const GetAllResidenceTypesDocument = gql`
    query getAllResidenceTypes {
  allResidenceTypes {
    edges {
      node {
        svg
        name
        id
      }
    }
  }
}
    `;

/**
 * __useGetAllResidenceTypesQuery__
 *
 * To run a query within a React component, call `useGetAllResidenceTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllResidenceTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllResidenceTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllResidenceTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllResidenceTypesQuery, GetAllResidenceTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllResidenceTypesQuery, GetAllResidenceTypesQueryVariables>(GetAllResidenceTypesDocument, options);
      }
export function useGetAllResidenceTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllResidenceTypesQuery, GetAllResidenceTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllResidenceTypesQuery, GetAllResidenceTypesQueryVariables>(GetAllResidenceTypesDocument, options);
        }
export type GetAllResidenceTypesQueryHookResult = ReturnType<typeof useGetAllResidenceTypesQuery>;
export type GetAllResidenceTypesLazyQueryHookResult = ReturnType<typeof useGetAllResidenceTypesLazyQuery>;
export type GetAllResidenceTypesQueryResult = Apollo.QueryResult<GetAllResidenceTypesQuery, GetAllResidenceTypesQueryVariables>;
export const AllArticleDocument = gql`
    query AllArticle($allArticleOffset: Int, $allArticleBefore: String, $allArticleAfter: String, $allArticleFirst: Int, $allArticleLast: Int, $allArticleCategory: ID) {
  allArticle(
    offset: $allArticleOffset
    before: $allArticleBefore
    after: $allArticleAfter
    first: $allArticleFirst
    last: $allArticleLast
    category: $allArticleCategory
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        shortDescription
        likes
        timeToRead
        image
        author {
          username
          avatar
        }
        category {
          title
        }
      }
    }
  }
}
    `;

/**
 * __useAllArticleQuery__
 *
 * To run a query within a React component, call `useAllArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllArticleQuery({
 *   variables: {
 *      allArticleOffset: // value for 'allArticleOffset'
 *      allArticleBefore: // value for 'allArticleBefore'
 *      allArticleAfter: // value for 'allArticleAfter'
 *      allArticleFirst: // value for 'allArticleFirst'
 *      allArticleLast: // value for 'allArticleLast'
 *      allArticleCategory: // value for 'allArticleCategory'
 *   },
 * });
 */
export function useAllArticleQuery(baseOptions?: Apollo.QueryHookOptions<AllArticleQuery, AllArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllArticleQuery, AllArticleQueryVariables>(AllArticleDocument, options);
      }
export function useAllArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllArticleQuery, AllArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllArticleQuery, AllArticleQueryVariables>(AllArticleDocument, options);
        }
export type AllArticleQueryHookResult = ReturnType<typeof useAllArticleQuery>;
export type AllArticleLazyQueryHookResult = ReturnType<typeof useAllArticleLazyQuery>;
export type AllArticleQueryResult = Apollo.QueryResult<AllArticleQuery, AllArticleQueryVariables>;
export const AllArticleCategoryiesDocument = gql`
    query AllArticleCategoryies {
  allArticleCategories {
    edges {
      node {
        id
        title
        svg
      }
    }
  }
}
    `;

/**
 * __useAllArticleCategoryiesQuery__
 *
 * To run a query within a React component, call `useAllArticleCategoryiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllArticleCategoryiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllArticleCategoryiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllArticleCategoryiesQuery(baseOptions?: Apollo.QueryHookOptions<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>(AllArticleCategoryiesDocument, options);
      }
export function useAllArticleCategoryiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>(AllArticleCategoryiesDocument, options);
        }
export type AllArticleCategoryiesQueryHookResult = ReturnType<typeof useAllArticleCategoryiesQuery>;
export type AllArticleCategoryiesLazyQueryHookResult = ReturnType<typeof useAllArticleCategoryiesLazyQuery>;
export type AllArticleCategoryiesQueryResult = Apollo.QueryResult<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>;
export const ArticleDocument = gql`
    query Article($articleId: ID!) {
  article(id: $articleId) {
    title
    shortDescription
    content
    createdAt
    likes
    timeToRead
    image
    author {
      id
      username
      avatar
    }
    category {
      title
      id
    }
    activities {
      edges {
        node {
          title
          svg
        }
      }
    }
    places {
      edges {
        node {
          name
        }
      }
    }
    accessories {
      edges {
        node {
          name
          image
          imageLink
        }
      }
    }
    reviewsOfArticle {
      edges {
        node {
          author {
            username
            avatar
          }
          description
        }
      }
    }
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const AllTourCategoriesDocument = gql`
    query AllTourCategories {
  tourCategories {
    edges {
      node {
        id
        title
        image
        svg
      }
    }
  }
}
    `;

/**
 * __useAllTourCategoriesQuery__
 *
 * To run a query within a React component, call `useAllTourCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTourCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTourCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTourCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllTourCategoriesQuery, AllTourCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTourCategoriesQuery, AllTourCategoriesQueryVariables>(AllTourCategoriesDocument, options);
      }
export function useAllTourCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTourCategoriesQuery, AllTourCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTourCategoriesQuery, AllTourCategoriesQueryVariables>(AllTourCategoriesDocument, options);
        }
export type AllTourCategoriesQueryHookResult = ReturnType<typeof useAllTourCategoriesQuery>;
export type AllTourCategoriesLazyQueryHookResult = ReturnType<typeof useAllTourCategoriesLazyQuery>;
export type AllTourCategoriesQueryResult = Apollo.QueryResult<AllTourCategoriesQuery, AllTourCategoriesQueryVariables>;
export const AllTourDocument = gql`
    query AllTour {
  allTour {
    edges {
      node {
        id
        days
        title
        description
        defaultImage
        likes
        tourLeader {
          id
          name
          user {
            avatar
            username
          }
        }
        category {
          title
        }
        province {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useAllTourQuery__
 *
 * To run a query within a React component, call `useAllTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTourQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTourQuery(baseOptions?: Apollo.QueryHookOptions<AllTourQuery, AllTourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTourQuery, AllTourQueryVariables>(AllTourDocument, options);
      }
export function useAllTourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTourQuery, AllTourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTourQuery, AllTourQueryVariables>(AllTourDocument, options);
        }
export type AllTourQueryHookResult = ReturnType<typeof useAllTourQuery>;
export type AllTourLazyQueryHookResult = ReturnType<typeof useAllTourLazyQuery>;
export type AllTourQueryResult = Apollo.QueryResult<AllTourQuery, AllTourQueryVariables>;
export const AllTransferTypesDocument = gql`
    query AllTransferTypes {
  allTransferType {
    edges {
      node {
        id
        title
        svg
      }
    }
  }
}
    `;

/**
 * __useAllTransferTypesQuery__
 *
 * To run a query within a React component, call `useAllTransferTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTransferTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTransferTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTransferTypesQuery(baseOptions?: Apollo.QueryHookOptions<AllTransferTypesQuery, AllTransferTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTransferTypesQuery, AllTransferTypesQueryVariables>(AllTransferTypesDocument, options);
      }
export function useAllTransferTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTransferTypesQuery, AllTransferTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTransferTypesQuery, AllTransferTypesQueryVariables>(AllTransferTypesDocument, options);
        }
export type AllTransferTypesQueryHookResult = ReturnType<typeof useAllTransferTypesQuery>;
export type AllTransferTypesLazyQueryHookResult = ReturnType<typeof useAllTransferTypesLazyQuery>;
export type AllTransferTypesQueryResult = Apollo.QueryResult<AllTransferTypesQuery, AllTransferTypesQueryVariables>;
export const AllTripDocument = gql`
    query AllTrip($allTripOffset: Int, $allTripBefore: String, $allTripAfter: String, $allTripFirst: Int, $allTripLast: Int, $allTripCategories: [[ID]]) {
  allTrip(
    offset: $allTripOffset
    before: $allTripBefore
    after: $allTripAfter
    first: $allTripFirst
    last: $allTripLast
    categories_In: $allTripCategories
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        description
        createdAt
        startDate
        endDate
        viewsCount
        defaultImage
        author {
          id
          username
          avatar
        }
        categories {
          edges {
            node {
              title
            }
          }
        }
        country {
          name
        }
        province {
          name
        }
        likes
        userLiked
        places {
          edges {
            node {
              id
            }
          }
        }
        published
        experiences {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllTripQuery__
 *
 * To run a query within a React component, call `useAllTripQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTripQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTripQuery({
 *   variables: {
 *      allTripOffset: // value for 'allTripOffset'
 *      allTripBefore: // value for 'allTripBefore'
 *      allTripAfter: // value for 'allTripAfter'
 *      allTripFirst: // value for 'allTripFirst'
 *      allTripLast: // value for 'allTripLast'
 *      allTripCategories: // value for 'allTripCategories'
 *   },
 * });
 */
export function useAllTripQuery(baseOptions?: Apollo.QueryHookOptions<AllTripQuery, AllTripQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTripQuery, AllTripQueryVariables>(AllTripDocument, options);
      }
export function useAllTripLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTripQuery, AllTripQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTripQuery, AllTripQueryVariables>(AllTripDocument, options);
        }
export type AllTripQueryHookResult = ReturnType<typeof useAllTripQuery>;
export type AllTripLazyQueryHookResult = ReturnType<typeof useAllTripLazyQuery>;
export type AllTripQueryResult = Apollo.QueryResult<AllTripQuery, AllTripQueryVariables>;
export const AllTripListDocument = gql`
    query AllTripList($allTripOffset: Int, $allTripBefore: String, $allTripAfter: String, $allTripFirst: Int, $allTripLast: Int, $allTripCategories: [[ID]]) {
  allTrip(
    offset: $allTripOffset
    before: $allTripBefore
    after: $allTripAfter
    first: $allTripFirst
    last: $allTripLast
    categories_In: $allTripCategories
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        description
        createdAt
        startDate
        endDate
        viewsCount
        defaultImage
        author {
          id
          username
          avatar
        }
        categories {
          edges {
            node {
              title
            }
          }
        }
        country {
          name
        }
        province {
          name
        }
        likes
        userLiked
        places {
          edges {
            node {
              id
            }
          }
        }
        activities {
          edges {
            node {
              svg
              title
              titleFa
              id
            }
          }
        }
        published
        experiences {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllTripListQuery__
 *
 * To run a query within a React component, call `useAllTripListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTripListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTripListQuery({
 *   variables: {
 *      allTripOffset: // value for 'allTripOffset'
 *      allTripBefore: // value for 'allTripBefore'
 *      allTripAfter: // value for 'allTripAfter'
 *      allTripFirst: // value for 'allTripFirst'
 *      allTripLast: // value for 'allTripLast'
 *      allTripCategories: // value for 'allTripCategories'
 *   },
 * });
 */
export function useAllTripListQuery(baseOptions?: Apollo.QueryHookOptions<AllTripListQuery, AllTripListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTripListQuery, AllTripListQueryVariables>(AllTripListDocument, options);
      }
export function useAllTripListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTripListQuery, AllTripListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTripListQuery, AllTripListQueryVariables>(AllTripListDocument, options);
        }
export type AllTripListQueryHookResult = ReturnType<typeof useAllTripListQuery>;
export type AllTripListLazyQueryHookResult = ReturnType<typeof useAllTripListLazyQuery>;
export type AllTripListQueryResult = Apollo.QueryResult<AllTripListQuery, AllTripListQueryVariables>;
export const AllTripCategoriesDocument = gql`
    query AllTripCategories {
  allTripCategories {
    edges {
      node {
        id
        title
        image
      }
    }
  }
}
    `;

/**
 * __useAllTripCategoriesQuery__
 *
 * To run a query within a React component, call `useAllTripCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTripCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTripCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTripCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>(AllTripCategoriesDocument, options);
      }
export function useAllTripCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>(AllTripCategoriesDocument, options);
        }
export type AllTripCategoriesQueryHookResult = ReturnType<typeof useAllTripCategoriesQuery>;
export type AllTripCategoriesLazyQueryHookResult = ReturnType<typeof useAllTripCategoriesLazyQuery>;
export type AllTripCategoriesQueryResult = Apollo.QueryResult<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>;
export const AllActivitiesDocument = gql`
    query AllActivities {
  allActivities {
    edges {
      node {
        id
        svg
        title
        titleFa
        description
      }
    }
  }
}
    `;

/**
 * __useAllActivitiesQuery__
 *
 * To run a query within a React component, call `useAllActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
      }
export function useAllActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
        }
export type AllActivitiesQueryHookResult = ReturnType<typeof useAllActivitiesQuery>;
export type AllActivitiesLazyQueryHookResult = ReturnType<typeof useAllActivitiesLazyQuery>;
export type AllActivitiesQueryResult = Apollo.QueryResult<AllActivitiesQuery, AllActivitiesQueryVariables>;
export const TripDetailLikesDocument = gql`
    query TripDetailLikes($tripId: ID!) {
  trip(id: $tripId) {
    likes
    userLiked
  }
}
    `;

/**
 * __useTripDetailLikesQuery__
 *
 * To run a query within a React component, call `useTripDetailLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripDetailLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripDetailLikesQuery({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useTripDetailLikesQuery(baseOptions: Apollo.QueryHookOptions<TripDetailLikesQuery, TripDetailLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripDetailLikesQuery, TripDetailLikesQueryVariables>(TripDetailLikesDocument, options);
      }
export function useTripDetailLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripDetailLikesQuery, TripDetailLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripDetailLikesQuery, TripDetailLikesQueryVariables>(TripDetailLikesDocument, options);
        }
export type TripDetailLikesQueryHookResult = ReturnType<typeof useTripDetailLikesQuery>;
export type TripDetailLikesLazyQueryHookResult = ReturnType<typeof useTripDetailLikesLazyQuery>;
export type TripDetailLikesQueryResult = Apollo.QueryResult<TripDetailLikesQuery, TripDetailLikesQueryVariables>;
export const TripDetailDocument = gql`
    query TripDetail($tripId: ID!) {
  trip(id: $tripId) {
    userLiked
    userSaved
    id
    tripMap
    gpsTrack
    costs
    checkList
    todoList
    published
    activities {
      edges {
        node {
          svg
          title
          titleFa
          id
        }
      }
    }
    accessories {
      edges {
        node {
          id
          likesCount
          brand {
            logo
            name
          }
          image
          imageLink
          name
        }
      }
    }
    companions {
      edges {
        node {
          id
          username
          avatar
        }
      }
    }
    images {
      edges {
        node {
          id
          image
          description
          copyrightName
        }
      }
    }
    videos {
      edges {
        node {
          video
          description
          copyrightName
        }
      }
    }
    title
    description
    createdAt
    startDate
    endDate
    author {
      id
      username
      avatar
    }
    likes
    experiences {
      edges {
        node {
          id
          title
          description
          latitude
          longitude
          activities {
            edges {
              node {
                id
                title
                titleFa
                svg
              }
            }
          }
          images {
            edges {
              node {
                id
                latitude
                longitude
                description
                image
                copyrightName
              }
            }
          }
        }
      }
    }
    residencesOfTrip {
      edges {
        node {
          id
          stayDuration
          name
          latitude
          longitude
          residenceType {
            id
            name
            svg
          }
        }
      }
    }
    places {
      edges {
        node {
          id
          name
          longitude
          latitude
        }
      }
    }
    transfers {
      edges {
        node {
          id
          duration
          startTime
          src {
            name
            latitude
            longitude
            id
          }
          destination {
            name
            latitude
            longitude
            id
          }
          transferType {
            id
            title
            svg
          }
        }
      }
    }
    defaultImage
    viewsCount
    country {
      id
      name
    }
    province {
      id
      name
      longitude
      latitude
    }
    categories {
      edges {
        node {
          id
          title
        }
      }
    }
  }
}
    `;

/**
 * __useTripDetailQuery__
 *
 * To run a query within a React component, call `useTripDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripDetailQuery({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useTripDetailQuery(baseOptions: Apollo.QueryHookOptions<TripDetailQuery, TripDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripDetailQuery, TripDetailQueryVariables>(TripDetailDocument, options);
      }
export function useTripDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripDetailQuery, TripDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripDetailQuery, TripDetailQueryVariables>(TripDetailDocument, options);
        }
export type TripDetailQueryHookResult = ReturnType<typeof useTripDetailQuery>;
export type TripDetailLazyQueryHookResult = ReturnType<typeof useTripDetailLazyQuery>;
export type TripDetailQueryResult = Apollo.QueryResult<TripDetailQuery, TripDetailQueryVariables>;
export const TripReviewsDocument = gql`
    query TripReviews($tripId: ID!) {
  trip(id: $tripId) {
    reviewsOfTrip {
      edges {
        node {
          author {
            id
            username
            avatar
          }
          likesCount
          dislikesCount
          description
          createdAt
          id
          userLiked
        }
      }
    }
  }
}
    `;

/**
 * __useTripReviewsQuery__
 *
 * To run a query within a React component, call `useTripReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripReviewsQuery({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useTripReviewsQuery(baseOptions: Apollo.QueryHookOptions<TripReviewsQuery, TripReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripReviewsQuery, TripReviewsQueryVariables>(TripReviewsDocument, options);
      }
export function useTripReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripReviewsQuery, TripReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripReviewsQuery, TripReviewsQueryVariables>(TripReviewsDocument, options);
        }
export type TripReviewsQueryHookResult = ReturnType<typeof useTripReviewsQuery>;
export type TripReviewsLazyQueryHookResult = ReturnType<typeof useTripReviewsLazyQuery>;
export type TripReviewsQueryResult = Apollo.QueryResult<TripReviewsQuery, TripReviewsQueryVariables>;
export const AllCountriesDocument = gql`
    query AllCountries {
  allCountries {
    edges {
      node {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useAllCountriesQuery__
 *
 * To run a query within a React component, call `useAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
      }
export function useAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
        }
export type AllCountriesQueryHookResult = ReturnType<typeof useAllCountriesQuery>;
export type AllCountriesLazyQueryHookResult = ReturnType<typeof useAllCountriesLazyQuery>;
export type AllCountriesQueryResult = Apollo.QueryResult<AllCountriesQuery, AllCountriesQueryVariables>;
export const AllProvincesOfCountryDocument = gql`
    query AllProvincesOfCountry($allProvincesCountry: ID) {
  allProvinces(country: $allProvincesCountry) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useAllProvincesOfCountryQuery__
 *
 * To run a query within a React component, call `useAllProvincesOfCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProvincesOfCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProvincesOfCountryQuery({
 *   variables: {
 *      allProvincesCountry: // value for 'allProvincesCountry'
 *   },
 * });
 */
export function useAllProvincesOfCountryQuery(baseOptions?: Apollo.QueryHookOptions<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>(AllProvincesOfCountryDocument, options);
      }
export function useAllProvincesOfCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>(AllProvincesOfCountryDocument, options);
        }
export type AllProvincesOfCountryQueryHookResult = ReturnType<typeof useAllProvincesOfCountryQuery>;
export type AllProvincesOfCountryLazyQueryHookResult = ReturnType<typeof useAllProvincesOfCountryLazyQuery>;
export type AllProvincesOfCountryQueryResult = Apollo.QueryResult<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>;
export const AllCitiesOfProvinceDocument = gql`
    query AllCitiesOfProvince($province: ID!) {
  allCities(province: $province) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useAllCitiesOfProvinceQuery__
 *
 * To run a query within a React component, call `useAllCitiesOfProvinceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCitiesOfProvinceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCitiesOfProvinceQuery({
 *   variables: {
 *      province: // value for 'province'
 *   },
 * });
 */
export function useAllCitiesOfProvinceQuery(baseOptions: Apollo.QueryHookOptions<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>(AllCitiesOfProvinceDocument, options);
      }
export function useAllCitiesOfProvinceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>(AllCitiesOfProvinceDocument, options);
        }
export type AllCitiesOfProvinceQueryHookResult = ReturnType<typeof useAllCitiesOfProvinceQuery>;
export type AllCitiesOfProvinceLazyQueryHookResult = ReturnType<typeof useAllCitiesOfProvinceLazyQuery>;
export type AllCitiesOfProvinceQueryResult = Apollo.QueryResult<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>;
export const TripReviewLikeStatusDocument = gql`
    query TripReviewLikeStatus($tripReviewId: ID!) {
  tripReview(id: $tripReviewId) {
    userLiked
  }
}
    `;

/**
 * __useTripReviewLikeStatusQuery__
 *
 * To run a query within a React component, call `useTripReviewLikeStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripReviewLikeStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripReviewLikeStatusQuery({
 *   variables: {
 *      tripReviewId: // value for 'tripReviewId'
 *   },
 * });
 */
export function useTripReviewLikeStatusQuery(baseOptions: Apollo.QueryHookOptions<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>(TripReviewLikeStatusDocument, options);
      }
export function useTripReviewLikeStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>(TripReviewLikeStatusDocument, options);
        }
export type TripReviewLikeStatusQueryHookResult = ReturnType<typeof useTripReviewLikeStatusQuery>;
export type TripReviewLikeStatusLazyQueryHookResult = ReturnType<typeof useTripReviewLikeStatusLazyQuery>;
export type TripReviewLikeStatusQueryResult = Apollo.QueryResult<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    avatar
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeTourLeaderDocument = gql`
    query MeTourLeader {
  me {
    tourleader {
      id
      name
      tourLeadingId
      successfulToursCount
    }
  }
}
    `;

/**
 * __useMeTourLeaderQuery__
 *
 * To run a query within a React component, call `useMeTourLeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeTourLeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeTourLeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeTourLeaderQuery(baseOptions?: Apollo.QueryHookOptions<MeTourLeaderQuery, MeTourLeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeTourLeaderQuery, MeTourLeaderQueryVariables>(MeTourLeaderDocument, options);
      }
export function useMeTourLeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeTourLeaderQuery, MeTourLeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeTourLeaderQuery, MeTourLeaderQueryVariables>(MeTourLeaderDocument, options);
        }
export type MeTourLeaderQueryHookResult = ReturnType<typeof useMeTourLeaderQuery>;
export type MeTourLeaderLazyQueryHookResult = ReturnType<typeof useMeTourLeaderLazyQuery>;
export type MeTourLeaderQueryResult = Apollo.QueryResult<MeTourLeaderQuery, MeTourLeaderQueryVariables>;
export const MeDetailDocument = gql`
    query MeDetail {
  me {
    ...UserFields
    profilemodel {
      ...ProfileFields
    }
    trips {
      edges {
        node {
          ...TripSimpleFields
        }
      }
    }
  }
}
    ${UserFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${TripSimpleFieldsFragmentDoc}`;

/**
 * __useMeDetailQuery__
 *
 * To run a query within a React component, call `useMeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeDetailQuery(baseOptions?: Apollo.QueryHookOptions<MeDetailQuery, MeDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeDetailQuery, MeDetailQueryVariables>(MeDetailDocument, options);
      }
export function useMeDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeDetailQuery, MeDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeDetailQuery, MeDetailQueryVariables>(MeDetailDocument, options);
        }
export type MeDetailQueryHookResult = ReturnType<typeof useMeDetailQuery>;
export type MeDetailLazyQueryHookResult = ReturnType<typeof useMeDetailLazyQuery>;
export type MeDetailQueryResult = Apollo.QueryResult<MeDetailQuery, MeDetailQueryVariables>;
export const UserDetailDocument = gql`
    query UserDetail($username: String!) {
  user(username: $username) {
    ...UserFields
    profilemodel {
      ...ProfileFields
    }
    trips {
      edges {
        node {
          ...TripSimpleFields
        }
      }
    }
  }
}
    ${UserFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${TripSimpleFieldsFragmentDoc}`;

/**
 * __useUserDetailQuery__
 *
 * To run a query within a React component, call `useUserDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserDetailQuery(baseOptions: Apollo.QueryHookOptions<UserDetailQuery, UserDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailQuery, UserDetailQueryVariables>(UserDetailDocument, options);
      }
export function useUserDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailQuery, UserDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailQuery, UserDetailQueryVariables>(UserDetailDocument, options);
        }
export type UserDetailQueryHookResult = ReturnType<typeof useUserDetailQuery>;
export type UserDetailLazyQueryHookResult = ReturnType<typeof useUserDetailLazyQuery>;
export type UserDetailQueryResult = Apollo.QueryResult<UserDetailQuery, UserDetailQueryVariables>;
export const IsFollowedDocument = gql`
    query isFollowed($followedUsername: String!) {
  followedUser(username: $followedUsername)
}
    `;

/**
 * __useIsFollowedQuery__
 *
 * To run a query within a React component, call `useIsFollowedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFollowedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFollowedQuery({
 *   variables: {
 *      followedUsername: // value for 'followedUsername'
 *   },
 * });
 */
export function useIsFollowedQuery(baseOptions: Apollo.QueryHookOptions<IsFollowedQuery, IsFollowedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsFollowedQuery, IsFollowedQueryVariables>(IsFollowedDocument, options);
      }
export function useIsFollowedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsFollowedQuery, IsFollowedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsFollowedQuery, IsFollowedQueryVariables>(IsFollowedDocument, options);
        }
export type IsFollowedQueryHookResult = ReturnType<typeof useIsFollowedQuery>;
export type IsFollowedLazyQueryHookResult = ReturnType<typeof useIsFollowedLazyQuery>;
export type IsFollowedQueryResult = Apollo.QueryResult<IsFollowedQuery, IsFollowedQueryVariables>;
export const TourLeaderDetailDocument = gql`
    query TourLeaderDetail($username: String!, $followedUsername: String!) {
  user(username: $username) {
    tourleader {
      id
      name
      tourLeadingId
      successfulToursCount
    }
  }
  followedUser(username: $followedUsername)
}
    `;

/**
 * __useTourLeaderDetailQuery__
 *
 * To run a query within a React component, call `useTourLeaderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTourLeaderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTourLeaderDetailQuery({
 *   variables: {
 *      username: // value for 'username'
 *      followedUsername: // value for 'followedUsername'
 *   },
 * });
 */
export function useTourLeaderDetailQuery(baseOptions: Apollo.QueryHookOptions<TourLeaderDetailQuery, TourLeaderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TourLeaderDetailQuery, TourLeaderDetailQueryVariables>(TourLeaderDetailDocument, options);
      }
export function useTourLeaderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TourLeaderDetailQuery, TourLeaderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TourLeaderDetailQuery, TourLeaderDetailQueryVariables>(TourLeaderDetailDocument, options);
        }
export type TourLeaderDetailQueryHookResult = ReturnType<typeof useTourLeaderDetailQuery>;
export type TourLeaderDetailLazyQueryHookResult = ReturnType<typeof useTourLeaderDetailLazyQuery>;
export type TourLeaderDetailQueryResult = Apollo.QueryResult<TourLeaderDetailQuery, TourLeaderDetailQueryVariables>;
export const UserFollowingsDocument = gql`
    query userFollowings($username: String!) {
  user(username: $username) {
    followingUsers {
      edges {
        node {
          followed {
            username
            avatar
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserFollowingsQuery__
 *
 * To run a query within a React component, call `useUserFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowingsQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserFollowingsQuery(baseOptions: Apollo.QueryHookOptions<UserFollowingsQuery, UserFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFollowingsQuery, UserFollowingsQueryVariables>(UserFollowingsDocument, options);
      }
export function useUserFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFollowingsQuery, UserFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFollowingsQuery, UserFollowingsQueryVariables>(UserFollowingsDocument, options);
        }
export type UserFollowingsQueryHookResult = ReturnType<typeof useUserFollowingsQuery>;
export type UserFollowingsLazyQueryHookResult = ReturnType<typeof useUserFollowingsLazyQuery>;
export type UserFollowingsQueryResult = Apollo.QueryResult<UserFollowingsQuery, UserFollowingsQueryVariables>;
export const UserFollowersDocument = gql`
    query UserFollowers($username: String!) {
  user(username: $username) {
    followerUsers {
      edges {
        node {
          follower {
            id
            username
            avatar
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserFollowersQuery__
 *
 * To run a query within a React component, call `useUserFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowersQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserFollowersQuery(baseOptions: Apollo.QueryHookOptions<UserFollowersQuery, UserFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFollowersQuery, UserFollowersQueryVariables>(UserFollowersDocument, options);
      }
export function useUserFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFollowersQuery, UserFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFollowersQuery, UserFollowersQueryVariables>(UserFollowersDocument, options);
        }
export type UserFollowersQueryHookResult = ReturnType<typeof useUserFollowersQuery>;
export type UserFollowersLazyQueryHookResult = ReturnType<typeof useUserFollowersLazyQuery>;
export type UserFollowersQueryResult = Apollo.QueryResult<UserFollowersQuery, UserFollowersQueryVariables>;
export const MeFollowingsDocument = gql`
    query MeFollowings {
  me {
    followingUsers {
      edges {
        node {
          followed {
            id
            username
            avatar
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMeFollowingsQuery__
 *
 * To run a query within a React component, call `useMeFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeFollowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeFollowingsQuery(baseOptions?: Apollo.QueryHookOptions<MeFollowingsQuery, MeFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeFollowingsQuery, MeFollowingsQueryVariables>(MeFollowingsDocument, options);
      }
export function useMeFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeFollowingsQuery, MeFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeFollowingsQuery, MeFollowingsQueryVariables>(MeFollowingsDocument, options);
        }
export type MeFollowingsQueryHookResult = ReturnType<typeof useMeFollowingsQuery>;
export type MeFollowingsLazyQueryHookResult = ReturnType<typeof useMeFollowingsLazyQuery>;
export type MeFollowingsQueryResult = Apollo.QueryResult<MeFollowingsQuery, MeFollowingsQueryVariables>;
export const MeFollowersDocument = gql`
    query MeFollowers {
  me {
    followerUsers {
      edges {
        node {
          follower {
            id
            username
            avatar
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMeFollowersQuery__
 *
 * To run a query within a React component, call `useMeFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeFollowersQuery(baseOptions?: Apollo.QueryHookOptions<MeFollowersQuery, MeFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeFollowersQuery, MeFollowersQueryVariables>(MeFollowersDocument, options);
      }
export function useMeFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeFollowersQuery, MeFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeFollowersQuery, MeFollowersQueryVariables>(MeFollowersDocument, options);
        }
export type MeFollowersQueryHookResult = ReturnType<typeof useMeFollowersQuery>;
export type MeFollowersLazyQueryHookResult = ReturnType<typeof useMeFollowersLazyQuery>;
export type MeFollowersQueryResult = Apollo.QueryResult<MeFollowersQuery, MeFollowersQueryVariables>;
export const AllProfilesDocument = gql`
    query AllProfiles {
  allUsers {
    edges {
      node {
        id
        username
        avatar
        trips {
          edges {
            node {
              id
            }
          }
        }
        profilemodel {
          tripStatus
          header
          about
          followersCount
          followingsCount
          achievements {
            edges {
              node {
                title
                image
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllProfilesQuery__
 *
 * To run a query within a React component, call `useAllProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProfilesQuery(baseOptions?: Apollo.QueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, options);
      }
export function useAllProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, options);
        }
export type AllProfilesQueryHookResult = ReturnType<typeof useAllProfilesQuery>;
export type AllProfilesLazyQueryHookResult = ReturnType<typeof useAllProfilesLazyQuery>;
export type AllProfilesQueryResult = Apollo.QueryResult<AllProfilesQuery, AllProfilesQueryVariables>;
export const MeSavedTripsDocument = gql`
    query MeSavedTrips {
  myTripCollection {
    edges {
      node {
        trip {
          ...TripSimpleFields
        }
      }
    }
  }
}
    ${TripSimpleFieldsFragmentDoc}`;

/**
 * __useMeSavedTripsQuery__
 *
 * To run a query within a React component, call `useMeSavedTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeSavedTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeSavedTripsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeSavedTripsQuery(baseOptions?: Apollo.QueryHookOptions<MeSavedTripsQuery, MeSavedTripsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeSavedTripsQuery, MeSavedTripsQueryVariables>(MeSavedTripsDocument, options);
      }
export function useMeSavedTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeSavedTripsQuery, MeSavedTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeSavedTripsQuery, MeSavedTripsQueryVariables>(MeSavedTripsDocument, options);
        }
export type MeSavedTripsQueryHookResult = ReturnType<typeof useMeSavedTripsQuery>;
export type MeSavedTripsLazyQueryHookResult = ReturnType<typeof useMeSavedTripsLazyQuery>;
export type MeSavedTripsQueryResult = Apollo.QueryResult<MeSavedTripsQuery, MeSavedTripsQueryVariables>;
export const MyTripsDocument = gql`
    query MyTrips($published: Boolean) {
  allMyTrip(published: $published) {
    edges {
      node {
        ...TripSimpleFields
      }
    }
  }
}
    ${TripSimpleFieldsFragmentDoc}`;

/**
 * __useMyTripsQuery__
 *
 * To run a query within a React component, call `useMyTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTripsQuery({
 *   variables: {
 *      published: // value for 'published'
 *   },
 * });
 */
export function useMyTripsQuery(baseOptions?: Apollo.QueryHookOptions<MyTripsQuery, MyTripsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTripsQuery, MyTripsQueryVariables>(MyTripsDocument, options);
      }
export function useMyTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTripsQuery, MyTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTripsQuery, MyTripsQueryVariables>(MyTripsDocument, options);
        }
export type MyTripsQueryHookResult = ReturnType<typeof useMyTripsQuery>;
export type MyTripsLazyQueryHookResult = ReturnType<typeof useMyTripsLazyQuery>;
export type MyTripsQueryResult = Apollo.QueryResult<MyTripsQuery, MyTripsQueryVariables>;
export const DeleteTripDocument = gql`
    mutation DeleteTrip($deleteTripTripId: ID!) {
  deleteTrip(tripId: $deleteTripTripId) {
    deleted
  }
}
    `;
export type DeleteTripMutationFn = Apollo.MutationFunction<DeleteTripMutation, DeleteTripMutationVariables>;

/**
 * __useDeleteTripMutation__
 *
 * To run a mutation, you first call `useDeleteTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTripMutation, { data, loading, error }] = useDeleteTripMutation({
 *   variables: {
 *      deleteTripTripId: // value for 'deleteTripTripId'
 *   },
 * });
 */
export function useDeleteTripMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTripMutation, DeleteTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTripMutation, DeleteTripMutationVariables>(DeleteTripDocument, options);
      }
export type DeleteTripMutationHookResult = ReturnType<typeof useDeleteTripMutation>;
export type DeleteTripMutationResult = Apollo.MutationResult<DeleteTripMutation>;
export type DeleteTripMutationOptions = Apollo.BaseMutationOptions<DeleteTripMutation, DeleteTripMutationVariables>;
export const PublisTripDocument = gql`
    mutation PublisTrip($tripId: ID!) {
  publishTrip(tripId: $tripId) {
    success
    trip {
      published
    }
  }
}
    `;
export type PublisTripMutationFn = Apollo.MutationFunction<PublisTripMutation, PublisTripMutationVariables>;

/**
 * __usePublisTripMutation__
 *
 * To run a mutation, you first call `usePublisTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublisTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publisTripMutation, { data, loading, error }] = usePublisTripMutation({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function usePublisTripMutation(baseOptions?: Apollo.MutationHookOptions<PublisTripMutation, PublisTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublisTripMutation, PublisTripMutationVariables>(PublisTripDocument, options);
      }
export type PublisTripMutationHookResult = ReturnType<typeof usePublisTripMutation>;
export type PublisTripMutationResult = Apollo.MutationResult<PublisTripMutation>;
export type PublisTripMutationOptions = Apollo.BaseMutationOptions<PublisTripMutation, PublisTripMutationVariables>;
export const UnPublisTripDocument = gql`
    mutation UnPublisTrip($tripId: ID!) {
  undoPublishTrip(tripId: $tripId) {
    success
    trip {
      published
    }
  }
}
    `;
export type UnPublisTripMutationFn = Apollo.MutationFunction<UnPublisTripMutation, UnPublisTripMutationVariables>;

/**
 * __useUnPublisTripMutation__
 *
 * To run a mutation, you first call `useUnPublisTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnPublisTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unPublisTripMutation, { data, loading, error }] = useUnPublisTripMutation({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useUnPublisTripMutation(baseOptions?: Apollo.MutationHookOptions<UnPublisTripMutation, UnPublisTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnPublisTripMutation, UnPublisTripMutationVariables>(UnPublisTripDocument, options);
      }
export type UnPublisTripMutationHookResult = ReturnType<typeof useUnPublisTripMutation>;
export type UnPublisTripMutationResult = Apollo.MutationResult<UnPublisTripMutation>;
export type UnPublisTripMutationOptions = Apollo.BaseMutationOptions<UnPublisTripMutation, UnPublisTripMutationVariables>;
export const SearchUsernameDocument = gql`
    query SearchUsername($username: String, $first: Int) {
  allUsers(username_Icontains: $username, first: $first) {
    edges {
      node {
        username
        id
        avatar
      }
    }
  }
}
    `;

/**
 * __useSearchUsernameQuery__
 *
 * To run a query within a React component, call `useSearchUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSearchUsernameQuery(baseOptions?: Apollo.QueryHookOptions<SearchUsernameQuery, SearchUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsernameQuery, SearchUsernameQueryVariables>(SearchUsernameDocument, options);
      }
export function useSearchUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsernameQuery, SearchUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsernameQuery, SearchUsernameQueryVariables>(SearchUsernameDocument, options);
        }
export type SearchUsernameQueryHookResult = ReturnType<typeof useSearchUsernameQuery>;
export type SearchUsernameLazyQueryHookResult = ReturnType<typeof useSearchUsernameLazyQuery>;
export type SearchUsernameQueryResult = Apollo.QueryResult<SearchUsernameQuery, SearchUsernameQueryVariables>;
export const namedOperations = {
  Query: {
    SearchAccessory: 'SearchAccessory',
    getAllResidenceTypes: 'getAllResidenceTypes',
    AllArticle: 'AllArticle',
    AllArticleCategoryies: 'AllArticleCategoryies',
    Article: 'Article',
    AllTourCategories: 'AllTourCategories',
    AllTour: 'AllTour',
    AllTransferTypes: 'AllTransferTypes',
    AllTrip: 'AllTrip',
    AllTripList: 'AllTripList',
    AllTripCategories: 'AllTripCategories',
    AllActivities: 'AllActivities',
    TripDetailLikes: 'TripDetailLikes',
    TripDetail: 'TripDetail',
    TripReviews: 'TripReviews',
    AllCountries: 'AllCountries',
    AllProvincesOfCountry: 'AllProvincesOfCountry',
    AllCitiesOfProvince: 'AllCitiesOfProvince',
    TripReviewLikeStatus: 'TripReviewLikeStatus',
    Me: 'Me',
    MeTourLeader: 'MeTourLeader',
    MeDetail: 'MeDetail',
    UserDetail: 'UserDetail',
    isFollowed: 'isFollowed',
    TourLeaderDetail: 'TourLeaderDetail',
    userFollowings: 'userFollowings',
    UserFollowers: 'UserFollowers',
    MeFollowings: 'MeFollowings',
    MeFollowers: 'MeFollowers',
    AllProfiles: 'AllProfiles',
    MeSavedTrips: 'MeSavedTrips',
    MyTrips: 'MyTrips',
    SearchUsername: 'SearchUsername'
  },
  Mutation: {
    VerifySms: 'VerifySms',
    RegisterSms: 'RegisterSms',
    RefreshToken: 'RefreshToken',
    ResetPasswordSms: 'ResetPasswordSms',
    ForgotPasswordSms: 'ForgotPasswordSms',
    TokenAuth: 'TokenAuth',
    ResendVerificationSms: 'ResendVerificationSms',
    PasswordChange: 'PasswordChange',
    UsernameChange: 'UsernameChange',
    CreateSinglTransfer: 'CreateSinglTransfer',
    DeleteSingleTransfer: 'DeleteSingleTransfer',
    LikeTrip: 'LikeTrip',
    CreateTripReview: 'CreateTripReview',
    CreateInitialTrip: 'CreateInitialTrip',
    UpdateTrip: 'UpdateTrip',
    LikeTripReviewMutation: 'LikeTripReviewMutation',
    DislikeTripReviewMutation: 'DislikeTripReviewMutation',
    SaveTripMutation: 'SaveTripMutation',
    CreateExperienceImage: 'CreateExperienceImage',
    CreateExperinceMutation: 'CreateExperinceMutation',
    CreateResidence: 'CreateResidence',
    DeleteResidence: 'DeleteResidence',
    UpdateResidence: 'UpdateResidence',
    UpdateProfile: 'UpdateProfile',
    UpdateUser: 'UpdateUser',
    FollowOrUnfollow: 'FollowOrUnfollow',
    DeleteTrip: 'DeleteTrip',
    PublisTrip: 'PublisTrip',
    UnPublisTrip: 'UnPublisTrip'
  },
  Fragment: {
    TripSimpleFields: 'TripSimpleFields',
    UserFields: 'UserFields',
    ProfileFields: 'ProfileFields'
  }
}