import memoizerific from 'memoizerific';

import { MARKETS, MAKE, POSITIONS, TRANSACTIONS, M } from '../../app/constants/pages';
import { FAVORITES, PENDING_REPORTS } from '../../markets/constants/markets-headers';

import store from '../../../store';

import { selectFilteredMarkets } from '../../markets/selectors/filtered-markets';

export default function() {
    var { activePage, selectedMarketsHeader, keywords, selectedFilters, pagination } = store.getState(),
    	{ allMarkets } = require('../../../selectors'),
    	unpaginated = selectUnpaginated(allMarkets, activePage, selectedMarketsHeader, keywords, selectedFilters);

    if (activePage !== POSITIONS && selectedMarketsHeader !== PENDING_REPORTS) {
    	return selectPaginated(unpaginated, pagination.selectedPageNum, pagination.numPerPage);
    }
    else {
        return unpaginated;
    }
}

export const selectUnpaginated = memoizerific(1)(function(allMarkets, activePage, selectedMarketsHeader, keywords, selectedFilters) {
    if (activePage === POSITIONS) {
    	return selectPositions(allMarkets);
    }

    if (selectedMarketsHeader === PENDING_REPORTS) {
    	return selectPendingReports(allMarkets);
    }

    var filteredMarkets = selectFilteredMarkets(allMarkets, keywords, selectedFilters);

    if (selectedMarketsHeader === FAVORITES) {
    	return selectFavorites(filteredMarkets);
    }

	return filteredMarkets;
});

export const selectPaginated = memoizerific(1)(function(markets, pageNum, numPerPage) {
    return markets.slice((pageNum - 1) * numPerPage, pageNum * numPerPage);
});

export const selectFavorites = memoizerific(1)(function(markets) {
    return markets.filter(market => !!market.isFavorite);
});

export const selectPendingReports = memoizerific(1)(function(markets) {
    return markets.filter(market => !!market.isPendingReport);
});

export const selectPositions = memoizerific(1)(function(markets) {
    return markets.filter(market => market.positionsSummary && market.positionsSummary.qtyShares.value);
});

