<template>
  <client-only>
      <ais-instant-search
        :search-client="searchClient"
        index-name="dev_PROPERTIES"
      >

        <ais-search-box />

        <ais-hits>
          <div slot="item" slot-scope="{ item }">
            <property-preview
              :id="item.id"
              :key="item.id"
              :title="item.propertyType"
              :img-src="item.imageURL"
              :card-text="item.description"
              :is-edit="false"
            />
          </div>
        </ais-hits>

        <ais-state-results class="mt-3">
          <template slot-scope="{ state: { query }, results: { hits, nbPages } }">
            <!-- show no result if query with no hits -->
            <div v-if="query && hits.length == 0">No se encontraron resultados</div>
            <div v-else></div>

            <!-- hide pagination if 1 or less pages -->
            <ais-pagination v-if="nbPages > 1"/>
          </template>
        </ais-state-results>

      </ais-instant-search>
    </client-only>
</template>

<script>
import algoliasearch from 'algoliasearch'
import PropertyPreview from '@/components/properties/PropertyPreview'
import 'instantsearch.css/themes/algolia-min.css'

const client = algoliasearch('9786XJSV62', '2872d6d59083888cd4130a58a7ae3a93')

// this setup is required to prevent search on empty query
const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return client.search(requests);
  },
};

export default {
  data() {
    return {
      searchClient
    }
  },
  components: {
    PropertyPreview
  }
}
</script>

<style scoped>
/* add bottom margin to search box */
.ais-SearchBox {
  margin-bottom: 1em;
}

/* change search result from grid/box to row */
.ais-Hits-item {
  width: 100%;
  border: none;
  box-shadow: none;

}

/* prevent highlight overwrite font-size */
.ais-Highlight {
  font-size: inherit;
}
.ais-Highlight-highlighted {
  font-size: inherit;
}
</style>